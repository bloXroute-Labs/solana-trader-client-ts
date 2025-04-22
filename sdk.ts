/**
 * BloxRoute SDK CLI for TypeScript - Solana Trader
 * An interactive CLI tool for exploring BloxRoute SDK functionality
 */

// Import required libraries
import inquirer from 'inquirer';
import gradient from 'gradient-string';
import figlet from 'figlet';
import chalk from 'chalk';
import {
  // General
  GrpcProvider,
  HttpProvider,
  WsProvider,
  loadFromEnv,
  Config,
  // Request types
  GetRecentBlockHashRequest,
  GetPumpFunNewAmmPoolStreamRequest,
  GetPumpFunNewTokensStreamRequest,
  GetPumpFunSwapsStreamRequest,
  GetNewRaydiumPoolsByTransactionRequest,
  GetPriorityFeeRequest,
  GetBundleTipRequest,
  GetTokenAccountsRequest,
  // Response types
  GetRecentBlockHashResponse,
  GetPriorityFeeResponse,
  GetBundleTipResponse,
  GetPumpFunNewAmmPoolStreamResponse,
  GetNewRaydiumPoolsByTransactionResponse,
  GetPumpFunNewTokensStreamResponse,
  GetPumpFunSwapsStreamResponse,
  GetNewRaydiumPoolsResponse
} from "@bloxroute/solana-trader-client-ts";
import bs58 from 'bs58'
import {
    PublicKey,
    Keypair,
    SystemProgram,
    Transaction,
    ComputeBudgetProgram,
  } from '@solana/web3.js';

// Types
interface SdkFunctionBase {
}

interface StreamingFunction extends SdkFunctionBase {
  (protocol: string, network: string, times?: number): Promise<SdkFunctionResult>;
}

interface RequestFunction extends SdkFunctionBase {
  (protocol: string, network: string): Promise<SdkFunctionResult>;
}

type SdkFunction = StreamingFunction | RequestFunction;

interface SdkFunctionResult {
  success: boolean;
  data?: any;
  error?: Error;
}

interface UserAction {
  continue: boolean;
  restart: boolean;
}

// Configuration
class AppConfig {
  private static instance: AppConfig;
  public config: Config;
  public grpcProvider: GrpcProvider;
  public grpcProviderPump: GrpcProvider;
  public httpProvider: HttpProvider;
  public httpProviderPump: HttpProvider;
  public wsProvider: WsProvider;
  public wsProviderPump: WsProvider;
  public signer: InstanceType<typeof Keypair>; 


  private constructor() {
    this.config = loadFromEnv();
    this.grpcProvider = new GrpcProvider(
      this.config.authHeader,
      this.config.privateKey,
      "ny.solana.dex.blxrbdn.com:443",
      true
    );
    this.grpcProviderPump = new GrpcProvider(
      this.config.authHeader,
      this.config.privateKey,
      "pump-ny.solana.dex.blxrbdn.com:443",
      true
    );
    this.httpProvider = new HttpProvider(
      this.config.authHeader,
      this.config.privateKey,
      "https://ny.solana.dex.blxrbdn.com:443",
    );
    this.httpProviderPump = new HttpProvider(
      this.config.authHeader,
      this.config.privateKey,
      "https://pump-ny.solana.dex.blxrbdn.com:443",
    );
    this.wsProvider = new WsProvider(
      this.config.authHeader,
      this.config.privateKey,
      "wss://ny.solana.dex.blxrbdn.com/ws",
    );
    this.wsProviderPump = new WsProvider(
      this.config.authHeader,
      this.config.privateKey,
      "wss://pump-ny.solana.dex.blxrbdn.com/ws",
    );
    this.wsProvider.connect()
    this.wsProviderPump.connect()
    this.signer = Keypair.fromSecretKey(
      bs58.decode(this.config.privateKey)
    )
  }

  public static getInstance(): AppConfig {
    if (!AppConfig.instance) {
      AppConfig.instance = new AppConfig();
    }
    return AppConfig.instance;
  }
}

// SDK Supported Functions
class SdkFunctions {
  private static appConfig = AppConfig.getInstance();

  public static getProvider(connectionType: string, isPump: boolean = false): any {
    switch (connectionType.toLowerCase()) {
      case 'grpc':
        return isPump ? SdkFunctions.appConfig.grpcProviderPump : SdkFunctions.appConfig.grpcProvider;
      case 'http':
        return isPump ? SdkFunctions.appConfig.httpProviderPump : SdkFunctions.appConfig.httpProvider;
        case 'websocket':
          const wsProvider = isPump ? SdkFunctions.appConfig.wsProviderPump : SdkFunctions.appConfig.wsProvider;
          wsProvider.connect();          
          return wsProvider;
      default:
        throw new Error(`Unsupported connection type: ${connectionType}`);
    }
  }

  // ======== Transaction Functions =========

  /**
 * Submit a transaction using postSubmit
 */
public static async postSubmit(protocol: string, network: string): Promise<SdkFunctionResult> {
  try {
    const signer = SdkFunctions.appConfig.signer;
    const bloxrouteTipWallet = new PublicKey("HWEoBxYs7ssKuudEjzjmpfJVX7Dvi7wescFsVx2L5yoY");
    
    // Create signed transaction
    const provider = SdkFunctions.getProvider(protocol);
    const blockhashResponse = await provider.getRecentBlockHash({});
    
    // Create transaction with BloXroute tip
    const transaction = new Transaction({
      recentBlockhash: blockhashResponse.blockHash,
      feePayer: signer.publicKey
    });
    
    // Add BloXroute tip
    transaction.add(
      SystemProgram.transfer({
        fromPubkey: signer.publicKey,
        toPubkey: bloxrouteTipWallet,
        lamports: 1_000_000
      })
    );
    
    // Add compute budget instructions and self-transfer
    transaction.add(
      ComputeBudgetProgram.setComputeUnitLimit({ units: 500_000 }),
      ComputeBudgetProgram.setComputeUnitPrice({ microLamports: 1_000 }),
      SystemProgram.transfer({
        fromPubkey: signer.publicKey,
        toPubkey: signer.publicKey,
        lamports: 1
      })
    );
    
    // Sign the transaction
    transaction.sign(signer);
    
    // Create request
    const request = {
      transaction: {
        content: transaction.serialize().toString(`base64`),
        isCleanup: false
      },
      skipPreFlight: true
    };
    
    // Submit transaction
    const response = await provider.postSubmit(request);
    console.info(JSON.stringify(response, null, 2));
    
    return {
      success: true,
      data: response
    };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error : new Error(String(error))
    };
  }
}

/**
 * Submit a transaction using postSubmitV2
 */
public static async postSubmitV2(protocol: string, network: string): Promise<SdkFunctionResult> {
  try {
    const signer = SdkFunctions.appConfig.signer;
    const bloxrouteTipWallet = new PublicKey("HWEoBxYs7ssKuudEjzjmpfJVX7Dvi7wescFsVx2L5yoY");
    
    // Create signed transaction
    const provider = SdkFunctions.getProvider(protocol);
    const blockhashResponse = await provider.getRecentBlockHash({});
    
    // Create transaction with BloXroute tip
    const transaction = new Transaction({
      recentBlockhash: blockhashResponse.blockHash,
      feePayer: signer.publicKey
    });
    
    // Add BloXroute tip
    transaction.add(
      SystemProgram.transfer({
        fromPubkey: signer.publicKey,
        toPubkey: bloxrouteTipWallet,
        lamports: 1_000_000
      })
    );
    
    // Add compute budget instructions and self-transfer
    transaction.add(
      ComputeBudgetProgram.setComputeUnitLimit({ units: 500_000 }),
      ComputeBudgetProgram.setComputeUnitPrice({ microLamports: 1_000 }),
      SystemProgram.transfer({
        fromPubkey: signer.publicKey,
        toPubkey: signer.publicKey,
        lamports: 1
      })
    );
    
    // Sign the transaction
    transaction.sign(signer);
    
    // Create request
    const request = {
      transaction: {
        content: transaction.serialize().toString(`base64`),
        isCleanup: false
      },
      skipPreFlight: true
    };
    
    // Submit transaction using V2
    const response = await provider.postSubmitV2(request);
    console.info(JSON.stringify(response, null, 2));
    
    return {
      success: true,
      data: response
    };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error : new Error(String(error))
    };
  }
}

/**
 * Submit a transaction using postSubmitPaladinV2
 */
public static async postSubmitPaladinV2(protocol: string, network: string): Promise<SdkFunctionResult> {
  try {
    const signer = SdkFunctions.appConfig.signer;
    const bloxrouteTipWallet = new PublicKey("HWEoBxYs7ssKuudEjzjmpfJVX7Dvi7wescFsVx2L5yoY");
    
    // Create signed transaction
    const provider = SdkFunctions.getProvider(protocol);
    const blockhashResponse = await provider.getRecentBlockHash({});
    
    // Create transaction with BloXroute tip
    const transaction = new Transaction({
      recentBlockhash: blockhashResponse.blockHash,
      feePayer: signer.publicKey
    });
    
    // Add BloXroute tip
    transaction.add(
      SystemProgram.transfer({
        fromPubkey: signer.publicKey,
        toPubkey: bloxrouteTipWallet,
        lamports: 10_000_000
      })
    );
    
    // Add compute budget instructions and self-transfer
    transaction.add(
      ComputeBudgetProgram.setComputeUnitLimit({ units: 1_000_000 }),
      ComputeBudgetProgram.setComputeUnitPrice({ microLamports: 40_000_000 }),
      SystemProgram.transfer({
        fromPubkey: signer.publicKey,
        toPubkey: signer.publicKey,
        lamports: 1
      })
    );
    
    // Sign the transaction
    transaction.sign(signer);
    
    // Create request
    const request = {
      transaction: {
        content: transaction.serialize().toString(`base64`),
      },
      revertProtection: true
    };
    
    // Submit transaction using paladin V2
    const response = await provider.postSubmitPaladinV2(request);
    console.info(JSON.stringify(response, null, 2));
    
    return {
      success: true,
      data: response
    };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error : new Error(String(error))
    };
  }
}

/**
 * Submit snipe transactions using postSubmitSnipeV2
 */
public static async postSubmitSnipeV2(protocol: string, network: string): Promise<SdkFunctionResult> {
  try {
    const signer = SdkFunctions.appConfig.signer;
    const bloxrouteTipWallet = new PublicKey("HWEoBxYs7ssKuudEjzjmpfJVX7Dvi7wescFsVx2L5yoY");
    const jitoTipWallet = new PublicKey("96gYZGLnJYVFmbjzopPSU6QiEV5fGqZNyN9nmNhvrZU5");
    
    // Create signed transactions
    const provider = SdkFunctions.getProvider(protocol);
    const blockhashResponse = await provider.getRecentBlockHash({});
    const blockHash = blockhashResponse.blockHash;
    
    // First transaction: transfer to both jito and bloxroute
    const transaction1 = new Transaction({
      recentBlockhash: blockHash,
      feePayer: signer.publicKey
    });
    
    transaction1.add(
      ComputeBudgetProgram.setComputeUnitLimit({ units: 500_000 }),
      ComputeBudgetProgram.setComputeUnitPrice({ microLamports: 1_000 }),
      SystemProgram.transfer({
        fromPubkey: signer.publicKey,
        toPubkey: jitoTipWallet,
        lamports: 100_000
      }),
      SystemProgram.transfer({
        fromPubkey: signer.publicKey,
        toPubkey: bloxrouteTipWallet,
        lamports: 1_000_000
      })
    );
    
    transaction1.sign(signer);
    
    // Second transaction with BloXroute tip
    const transaction2 = new Transaction({
      recentBlockhash: blockHash,
      feePayer: signer.publicKey
    });
    
    transaction2.add(
      SystemProgram.transfer({
        fromPubkey: signer.publicKey,
        toPubkey: bloxrouteTipWallet,
        lamports: 1_000_000
      })
    );
    
    transaction2.add(
      ComputeBudgetProgram.setComputeUnitLimit({ units: 500_000 }),
      ComputeBudgetProgram.setComputeUnitPrice({ microLamports: 1_000 }),
      SystemProgram.transfer({
        fromPubkey: signer.publicKey,
        toPubkey: signer.publicKey,
        lamports: 1
      })
    );
    
    transaction2.sign(signer);
    
    // Create snipe request
    const request = {
      entries: [transaction1, transaction2].map(tx => ({
        transaction: {
          content: tx.serialize().toString('base64'),
          isCleanup: false
        }
      })),
      useStakedRPCs: true
    };
    
    // Submit snipe request
    const response = await provider.postSubmitSnipeV2(request);
    console.info(JSON.stringify(response, null, 2));
    
    return {
      success: true,
      data: response
    };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error : new Error(String(error))
    };
  }
}

/**
 * Post a SOL Swap for PumpFun
 */
public static async postPumpFunSwapSol(protocol: string, network: string): Promise<SdkFunctionResult> {
  try {
    const provider = SdkFunctions.getProvider(protocol, true); // Use pump provider
    
    // Get new PumpFun token
    const newTokens = await SdkFunctions.getPumpFunNewTokensStream(protocol, network, 1);
    const token = newTokens.data[0]
    console.info(JSON.stringify(token, null, 2));
    
    // Create swap request
    const request = {
      userAddress: token.creator,
      bondingCurveAddress: token.bondingCurve,
      tokenAddress: token.mint,
      solAmount: 0.0001,
      slippage: 20,
      computeLimit: 250_000,
      computePrice: "100000",
      tip: "1000000"
    };
    
    // Post swap for transaction
    const response = await provider.postPumpFunSwapSol(request);
    console.info(JSON.stringify(response, null, 2));
    
    return {
      success: true,
      data: response
    };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error : new Error(String(error))
    };
  }
}

  // ======== Streaming Functions =========

  /**
   * Get recent block hash stream
   */
  public static async getRecentBlockHashStream(protocol: string, network: string, times: number = 5): Promise<SdkFunctionResult> {
      try {
          const request = {} as GetRecentBlockHashRequest;
          const provider = SdkFunctions.getProvider(protocol);
          const stream = await provider.getRecentBlockHashStream(request);
          
          const responses: GetRecentBlockHashResponse[] = [];
          for await (const response of stream) {
              console.info(JSON.stringify(response, null, 2));
              responses.push(response);
              times--;
              if (times === 0) {
                  break;
              }
          }
          
          return { 
              success: true,
              data: responses 
          };
      } catch (error) {
          return {
              success: false,
              error: error instanceof Error ? error : new Error(String(error))
          };
      }
  }

  /**
   * Get priority fee stream
   */
  public static async getPriorityFeeStream(protocol: string, network: string, times: number = 5): Promise<SdkFunctionResult> {
      try {
          const request = {} as GetPriorityFeeRequest;
          const provider = SdkFunctions.getProvider(protocol);
          const stream = await provider.getPriorityFeeStream(request);
          
          const responses: GetPriorityFeeResponse[] = [];
          for await (const response of stream) {
              console.info(JSON.stringify(response, null, 2));
              responses.push(response);
              times--;
              if (times === 0) {
                  break;
              }
          }
          
          return { 
              success: true,
              data: responses 
          };
      } catch (error) {
          return {
              success: false,
              error: error instanceof Error ? error : new Error(String(error))
          };
      }
  }

  /**
   * Get bundle tip stream
   */
  public static async getBundleTipStream(protocol: string, network: string, times: number = 1): Promise<SdkFunctionResult> {
      try {
          const request = {} as GetBundleTipRequest;
          const provider = SdkFunctions.getProvider(protocol);
          const stream = await provider.getBundleTipStream(request);
          
          const responses: GetBundleTipResponse[] = []
          for await (const response of stream) {
              console.info(JSON.stringify(response, null, 2));
              responses.push(response);
              times--;
              if (times === 0) {
                  break;
              }
          }
          
          return { 
              success: true,
              data: responses 
          };
      } catch (error) {
          return {
              success: false,
              error: error instanceof Error ? error : new Error(String(error))
          };
      }
  }

  /**
   * Get new PumpSwap AMM pool stream
   */
  public static async getPumpFunNewAmmPoolStream(protocol: string, network: string, times: number = 5): Promise<SdkFunctionResult> {
      try {
          const request = {} as GetPumpFunNewAmmPoolStreamRequest;
          const provider = SdkFunctions.getProvider(protocol, true);
          const stream = await provider.getPumpFunNewAmmPoolStream(request);
          
          const responses: GetPumpFunNewAmmPoolStreamResponse[] = [];
          for await (const response of stream) {
              console.info(JSON.stringify(response, null, 2));
              responses.push(response);
              times--;
              if (times === 0) {
                  break;
              }
          }
          
          return { 
              success: true,
              data: responses 
          };
      } catch (error) {
          return {
              success: false,
              error: error instanceof Error ? error : new Error(String(error))
          };
      }
  }

  /**
   * Get new PumpFun tokens stream
   */
  public static async getPumpFunNewTokensStream(protocol: string, network: string, times: number = 1): Promise<SdkFunctionResult> {
      try {
          const request = {} as GetPumpFunNewTokensStreamRequest;
          const provider = SdkFunctions.getProvider(protocol, true);
          const stream = await provider.getPumpFunNewTokensStream(request);
          
          const responses: GetPumpFunNewTokensStreamResponse[] = [];
          for await (const response of stream) {
              console.info(JSON.stringify(response, null, 2));
              responses.push(response);
              times--;
              if (times === 0) {
                  break;
              }
          }
          
          return { 
              success: true,
              data: responses 
          };
      } catch (error) {
          return {
              success: false,
              error: error instanceof Error ? error : new Error(String(error))
          };
      }
  }

  /**
   * Get new Pump Fun swaps stream
   */
  public static async getPumpFunSwapsStream(protocol: string, network: string, times: number = 1): Promise<SdkFunctionResult> {
      try {          
          // Get a new token to monitor
          const newTokens = await SdkFunctions.getPumpFunNewTokensStream(protocol, network, 1);

          const request = {
              tokens: [newTokens.data[0].mint]
          } as GetPumpFunSwapsStreamRequest;

          const provider = SdkFunctions.getProvider(protocol, true);
          
          const stream = await provider.getPumpFunSwapsStream(request);
          
          const responses: GetPumpFunSwapsStreamResponse[] = [];
          for await (const response of stream) {
              console.info(JSON.stringify(response, null, 2));
              responses.push(response);
              times--;
              if (times === 0) {
                  break;
              }
          }
          
          return { 
              success: true,
              data: responses 
          };
      } catch (error) {
          return {
              success: false,
              error: error instanceof Error ? error : new Error(String(error))
          };
      }
  }

  /**
   * Get new Raydium pools stream
   */
  public static async getNewRaydiumPoolsStream(protocol: string, network: string, times: number = 1): Promise<SdkFunctionResult> {
      try {
          const request = {} as GetPumpFunNewAmmPoolStreamRequest;
          const provider = SdkFunctions.getProvider(protocol);
          const stream = await provider.getNewRaydiumPoolsStream(request);
          
          const responses: GetNewRaydiumPoolsResponse[] = [];
          for await (const response of stream) {
              console.info(JSON.stringify(response, null, 2));
              responses.push(response);
              times--;
              if (times === 0) {
                  break;
              }
          }
          
          return { 
              success: true,
              data: responses 
          };
      } catch (error) {
          return {
              success: false,
              error: error instanceof Error ? error : new Error(String(error))
          };
      }
  }

  /**
   * Get new Raydium pools by transaction stream
   */
  public static async getNewRaydiumPoolsByTransactionStream(protocol: string, network: string, times: number = 5): Promise<SdkFunctionResult> {
      try {
          const request = {} as GetNewRaydiumPoolsByTransactionRequest;
          const provider = SdkFunctions.getProvider(protocol);
          const stream = await provider.getNewRaydiumPoolsByTransactionStream(request);
          
          const responses: GetNewRaydiumPoolsByTransactionResponse[] = [];
          for await (const response of stream) {
              console.info(JSON.stringify(response, null, 2));
              responses.push(response);
              times--;
              if (times === 0) {
                  break;
              }
          }
          
          return { 
              success: true,
              data: responses 
          };
      } catch (error) {
          return {
              success: false,
              error: error instanceof Error ? error : new Error(String(error))
          };
      }
  }

  // ======== Request Functions =========

  /**
   * Get token accounts
   */
  public static async getTokenAccounts(protocol: string, network: string): Promise<SdkFunctionResult> {
      try {
          
          const request = {
              ownerAddress: "AfU4AhJhqSsMji1oij1ZGfskQGGmmUW1vsdS3j7eeEwj"
          } as GetTokenAccountsRequest;
          const provider = SdkFunctions.getProvider(protocol);
          const response = await provider.getTokenAccounts(request);
          console.info(JSON.stringify(response, null, 2));
          
          return { 
              success: true,
              data: response 
          };
      } catch (error) {
          return {
              success: false,
              error: error instanceof Error ? error : new Error(String(error))
          };
      }
  }

  /**
   * Get priority fee
   */
  public static async getPriorityFee(protocol: string, network: string): Promise<SdkFunctionResult> {
      try {

          const request = {
              project: "P_RAYDIUM",
              percentile: 50
          } as GetPriorityFeeRequest;
          
          const provider = SdkFunctions.getProvider(protocol);
          const response = await provider.getPriorityFee(request);
          console.info(JSON.stringify(response, null, 2));
          
          return { 
              success: true,
              data: response 
          };
      } catch (error) {
          return {
              success: false,
              error: error instanceof Error ? error : new Error(String(error))
          };
      }
  }

  /**
   * Get all available SDK functions based on connection type
   * @param connectionType - The selected connection type
   * @returns Record of available functions for the selected connection type
   */
  public static getAvailableFunctions(connectionType: string): Record<string, SdkFunction> {
    // Base non-streaming functions available for all connection types
    const baseFunctions: Record<string, SdkFunction> = {
      // Request functions
      GetTokenAccounts: SdkFunctions.getTokenAccounts,
      GetPriorityFee: SdkFunctions.getPriorityFee,
      PostSubmit: SdkFunctions.postSubmit,
      PostSubmitV2: SdkFunctions.postSubmitV2,
      PostSubmitSnipeV2: SdkFunctions.postSubmitSnipeV2,
      PostSubmitPaladinV2: SdkFunctions.postSubmitPaladinV2,
      PostPumpFunSwapSol: SdkFunctions.postPumpFunSwapSol,
    };
    
    // For HTTP, we only provide non-streaming functions
    if (connectionType.toLowerCase() === 'http') {
      return baseFunctions;
    }
    
    // For gRPC and WebSocket, include streaming functions
    return {
      ...baseFunctions,
      // Streaming functions
      GetRecentBlockHashStream: SdkFunctions.getRecentBlockHashStream,
      GetPriorityFeeStream: SdkFunctions.getPriorityFeeStream,
      GetBundleTipStream: SdkFunctions.getBundleTipStream,
      GetPumpFunNewAmmPoolStream: SdkFunctions.getPumpFunNewAmmPoolStream,
      GetPumpFunNewTokensStream: SdkFunctions.getPumpFunNewTokensStream,
      GetPumpFunSwapsStream: SdkFunctions.getPumpFunSwapsStream,
      GetNewRaydiumPoolsStream: SdkFunctions.getNewRaydiumPoolsStream,
      GetNewRaydiumPoolsByTransactionStream: SdkFunctions.getNewRaydiumPoolsByTransactionStream,
    };
  }
}

export default SdkFunctions;

// UI Components
class UserInterface {
  /**
   * Display welcome banner with ASCII art
   */
  public static async displayBanner(): Promise<void> {
    console.clear();
    
    // Create a colorful gradient text for the banner
    const bloxGradient = gradient(['#FF5733', '#FFC300', '#36D7B7']);

    // Create ASCII art banner
    const text = figlet.textSync('BloxRoute SDK', {
      font: 'Standard',
      horizontalLayout: 'default',
      verticalLayout: 'default'
    });

    console.log(bloxGradient(text));
    console.log('\n' + chalk.bold(' Welcome to the BloxRoute SDK for TypeScript - Solana Trader') + '\n');
    console.log(chalk.dim(' Interactive CLI for exploring the BloxRoute SDK functionality'));
    console.log(chalk.dim(' Use your arrow keys to navigate through the menus') + '\n');
  }

/**
 * Show connection type selection menu
 * @returns Selected connection type
 */
public static async selectConnectionType(): Promise<string> {
  const { connectionType } = await inquirer.prompt([
    {
      type: 'list',
      name: 'connectionType',
      message: 'Select connection type:',
      choices: ['gRPC', 'HTTP', 'WebSocket'],
    }
  ]);
  
  return connectionType;
}

  /**
   * Show network selection menu
   * @returns Selected network
   */
  public static async selectNetwork(): Promise<string> {
    const { network } = await inquirer.prompt([
      {
        type: 'list',
        name: 'network',
        message: 'Select network:',
        choices: ['mainnet'],
      }
    ]);
    
    return network;
  }

  /**
   * Show function selection menu
   * @param availableFunctions - List of available function names
   * @returns Selected function name
   */
  public static async selectFunction(availableFunctions: string[]): Promise<string> {
    const { selectedFunction } = await inquirer.prompt([
      {
        type: 'list',
        name: 'selectedFunction',
        message: 'Select function to execute:',
        choices: availableFunctions,
      }
    ]);
    
    return selectedFunction;
  }

  /**
   * Ask user for next action
   * @returns User action choice
   */
  public static async getNextAction(): Promise<UserAction> {
    const { action } = await inquirer.prompt([
      {
        type: 'list',
        name: 'action',
        message: 'What would you like to do next?',
        choices: [
          { name: 'Execute another function', value: 'continue' },
          { name: 'Change protocol/network settings', value: 'change' },
          { name: 'Exit', value: 'exit' }
        ]
      }
    ]);
    
    return {
      continue: action !== 'exit',
      restart: action === 'change'
    };
  }

  /**
   * Wait for user input to continue
   */
  public static async waitForInput(): Promise<void> {
    console.log('\nPress Enter to continue...');
    await inquirer.prompt([
      {
        type: 'input',
        name: 'continue',
        message: '',
      }
    ]);
  }
}

// Track whether cleanup has already been performed
let cleanupPerformed = false;

function cleanup(): void {
  // If cleanup has already been performed, do nothing
  if (cleanupPerformed) {
    return;
  }
  
  console.log(chalk.yellow('\nCleaning up connections...'));
  
  const appConfig = AppConfig.getInstance();
  appConfig.wsProvider.close();
  appConfig.wsProviderPump.close();
  
  console.log(chalk.green('Connections closed successfully.'));
  
  // Mark cleanup as performed
  cleanupPerformed = true;
}

class BloxRouteCliApp {
  private connectionType = '';
  private network = '';
  private sdkFunctions: Record<string, SdkFunction>;

  constructor() {
    // Initialize AppConfig singleton to set up providers
    AppConfig.getInstance();
    this.sdkFunctions = {};
  }

  /**
   * Execute the selected function with the given connection type and network
   * @param functionName - Name of the function to execute
   */
  private async executeFunction(functionName: string): Promise<void> {
    console.log(chalk.yellow('\nExecuting function, please wait...\n'));
    
    try {
      const result = await this.sdkFunctions[functionName](this.connectionType, this.network);
      
      if (result.success) {
        console.log(chalk.green('\nSuccess!'));
      } else {
        throw result.error;
      }
    } catch (error) {
      console.log(chalk.red('\nError executing function:'));
      console.error(error);
    }
    
    await UserInterface.waitForInput();
  }

  /**
   * Configure connection type and network settings
   */
  private async configureSettings(): Promise<void> {
    // Select connection type
    this.connectionType = await UserInterface.selectConnectionType();
    console.log(chalk.green(`Selected connection type: ${this.connectionType}`));
    
    // Update available functions based on selected connection type
    this.sdkFunctions = SdkFunctions.getAvailableFunctions(this.connectionType);
    
    // Select network
    this.network = await UserInterface.selectNetwork();
    console.log(chalk.green(`Selected network: ${this.network}`));
  }

  /**
   * Main application flow
   */
  public async run(): Promise<void> {
    await UserInterface.displayBanner();
    await this.configureSettings();
    
    // Function selection and execution loop
    let continueRunning = true;
    
    while (continueRunning) {
      // Select function to execute
      const availableFunctions = Object.keys(this.sdkFunctions);
      const selectedFunction = await UserInterface.selectFunction(availableFunctions);
      
      // Execute the selected function
      await this.executeFunction(selectedFunction);
      
      // Ask what the user wants to do next
      const action = await UserInterface.getNextAction();
      continueRunning = action.continue;
      
      if (action.restart) {
        return this.run(); // Restart from the beginning
      }
    }

    // Call cleanup when user selects exit
    cleanup();
    
    console.log(chalk.blue('\nThank you for using the BloxRoute SDK CLI!'));
  }
}

function setupSignalHandlers(): void {
  process.on('SIGINT', () => {
    console.log('\nReceived SIGINT. Shutting down gracefully...');
    cleanup();
    
    // Allow some time for cleanup before exiting
    setTimeout(() => {
      console.log('Exiting application');
      process.exit(0);
    }, 500);
  });
  
  // Handle other termination signals too
  process.on('SIGTERM', () => {
    console.log('\nReceived SIGTERM. Shutting down gracefully...');
    cleanup();
    
    setTimeout(() => {
      console.log('Exiting application');
      process.exit(0);
    }, 500);
  });
}

// Start the application
setupSignalHandlers();
const app = new BloxRouteCliApp();
app.run().catch((error) => {
  console.error('Application error:', error);
  process.exit(1);
});