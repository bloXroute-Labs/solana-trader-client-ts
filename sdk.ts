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
  MAINNET_API_GRPC_PORT,
  MAINNET_API_NY_GRPC,
  MAINNET_API_PUMP_NY_GRPC
  GrpcProvider,
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
  GetLeaderScheduleRequest,
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

// Types
interface SdkFunctionBase {
}

interface StreamingFunction extends SdkFunctionBase {
  (protocol?: string, network?: string, times?: number): Promise<SdkFunctionResult>;
}

interface RequestFunction extends SdkFunctionBase {
  (protocol?: string, network?: string): Promise<SdkFunctionResult>;
}

// Then you can use a union type
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
  public provider: GrpcProvider;
  public providerPump: GrpcProvider;

  private constructor() {
    this.config = loadFromEnv();
    this.provider = new GrpcProvider(
      this.config.authHeader,
      this.config.privateKey,
      `${MAINNET_API_NY_GRPC}:${MAINNET_API_GRPC_PORT}`,
      true
    );
    this.providerPump = new GrpcProvider(
      this.config.authHeader,
      this.config.privateKey,
      `${MAINNET_API_PUMP_NY_GRPC}:${MAINNET_API_GRPC_PORT}`,
      true
    );
  }

  public static getInstance(): AppConfig {
    if (!AppConfig.instance) {
      AppConfig.instance = new AppConfig();
    }
    return AppConfig.instance;
  }
}

class SdkFunctions {
  private static appConfig = AppConfig.getInstance();

  // ======== Transaction Functions =========

  // ======== Streaming Functions =========

  /**
   * Get recent block hash stream
   */
  public static async getRecentBlockHashStream(protocol?: string, network?: string, times: number = 5): Promise<SdkFunctionResult> {
      try {
          const request = {} as GetRecentBlockHashRequest;
          const stream = await SdkFunctions.appConfig.provider.getRecentBlockHashStream(request);
          
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
  public static async getPriorityFeeStream(protocol?: string, network?: string, times: number = 5): Promise<SdkFunctionResult> {
      try {
          const request = {} as GetPriorityFeeRequest;
          const stream = await SdkFunctions.appConfig.provider.getPriorityFeeStream(request);
          
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
  public static async getBundleTipStream(protocol?: string, network?: string, times: number = 1): Promise<SdkFunctionResult> {
      try {
          const request = {} as GetBundleTipRequest;
          const stream = await SdkFunctions.appConfig.provider.getBundleTipStream(request);
          
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
  public static async getPumpFunNewAmmPoolStream(protocol?: string, network?: string, times: number = 5): Promise<SdkFunctionResult> {
      try {
          const request = {} as GetPumpFunNewAmmPoolStreamRequest;
          const stream = await SdkFunctions.appConfig.providerPump.getPumpFunNewAmmPoolStream(request);
          
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
  public static async getPumpFunNewTokensStream(protocol?: string, network?: string, times: number = 1): Promise<SdkFunctionResult> {
      try {
          const request = {} as GetPumpFunNewTokensStreamRequest;
          const stream = await SdkFunctions.appConfig.providerPump.getPumpFunNewTokensStream(request);
          
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
  public static async getPumpFunSwapsStream(protocol?: string, network?: string, times: number = 5): Promise<SdkFunctionResult> {
      try {          
          // Get a new token to monitor
          const newTokens = await this.getPumpFunNewTokensStream(undefined, undefined, 1);

          const request = {
              tokens: [newTokens[0].mint]
          } as GetPumpFunSwapsStreamRequest;
          
          const stream = await SdkFunctions.appConfig.providerPump.getPumpFunSwapsStream(request);
          
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
  public static async getNewRaydiumPoolsStream(protocol?: string, network?: string, times: number = 1): Promise<SdkFunctionResult> {
      try {
          const request = {} as GetPumpFunNewAmmPoolStreamRequest;
          const stream = await SdkFunctions.appConfig.provider.getNewRaydiumPoolsStream(request);
          
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
  public static async getNewRaydiumPoolsByTransactionStream(protocol?: string, network?: string, times: number = 5): Promise<SdkFunctionResult> {
      try {
          const request = {} as GetNewRaydiumPoolsByTransactionRequest;
          const stream = await SdkFunctions.appConfig.provider.getNewRaydiumPoolsByTransactionStream(request);
          
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
  public static async getTokenAccounts(): Promise<SdkFunctionResult> {
      try {
          
          const request = {
              ownerAddress: "AfU4AhJhqSsMji1oij1ZGfskQGGmmUW1vsdS3j7eeEwj"
          } as GetTokenAccountsRequest;
          
          const response = await SdkFunctions.appConfig.provider.getTokenAccounts(request);
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
  public static async getPriorityFee(): Promise<SdkFunctionResult> {
      try {

          const request = {
              project: "P_RAYDIUM",
              percentile: 50
          } as GetPriorityFeeRequest;
          
          const response = await SdkFunctions.appConfig.provider.getPriorityFee(request);
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
   * Get leader schedule
   */
  public static async getLeaderSchedule(protocol?: string, network?: string): Promise<SdkFunctionResult> {
      try {
          
          const request = {} as GetLeaderScheduleRequest;
          
          const response = await SdkFunctions.appConfig.provider.getLeaderSchedule(request);
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
   * Get all available SDK functions
   */
  public static getAvailableFunctions(): Record<string, SdkFunction> {
      return {
          
          // Streaming functions
          GetRecentBlockHashStream: SdkFunctions.getRecentBlockHashStream,
          GetPriorityFeeStream: SdkFunctions.getPriorityFeeStream,
          GetBundleTipStream: SdkFunctions.getBundleTipStream,
          GetPumpFunNewAmmPoolStream: SdkFunctions.getPumpFunNewAmmPoolStream,
          GetPumpFunNewTokensStream: SdkFunctions.getPumpFunNewTokensStream,
          GetPumpFunSwapsStream: SdkFunctions.getPumpFunSwapsStream,
          GetNewRaydiumPoolsStream: SdkFunctions.getNewRaydiumPoolsStream,
          GetNewRaydiumPoolsByTransactionStream: SdkFunctions.getNewRaydiumPoolsByTransactionStream,
          
          // Request functions
          GetTokenAccounts: SdkFunctions.getTokenAccounts,
          GetPriorityFee: SdkFunctions.getPriorityFee,
          GetLeaderSchedule: SdkFunctions.getLeaderSchedule
      };
  }
}

// Export the class
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
   * Show protocol selection menu
   * @returns Selected protocol
   */
  public static async selectProtocol(): Promise<string> {
    const { protocol } = await inquirer.prompt([
      {
        type: 'list',
        name: 'protocol',
        message: 'Select connection protocol:',
        choices: ['gRPC'],
      }
    ]);
    
    return protocol;
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

// Main application class
class BloxRouteCliApp {
  private protocol = '';
  private network = '';
  private sdkFunctions: Record<string, SdkFunction>;

  constructor() {
    // Initialize AppConfig singleton to set up providers
    AppConfig.getInstance();
    this.sdkFunctions = SdkFunctions.getAvailableFunctions();
  }

  /**
   * Execute the selected function with the given protocol and network
   * @param functionName - Name of the function to execute
   */
  private async executeFunction(functionName: string): Promise<void> {
    console.log(chalk.yellow('\nExecuting function, please wait...\n'));
    
    try {
      const result = await this.sdkFunctions[functionName](this.protocol, this.network);
      
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
   * Configure protocol and network settings
   */
  private async configureSettings(): Promise<void> {
    // Select protocol
    this.protocol = await UserInterface.selectProtocol();
    console.log(chalk.green(`Selected protocol: ${this.protocol}`));
    
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
      
      // Ask what the user wants to do next - ONLY ONCE
      const action = await UserInterface.getNextAction();
      continueRunning = action.continue;
      
      if (action.restart) {
        return this.run(); // Restart from the beginning
      }
    }
    
    console.log(chalk.blue('\nThank you for using the BloxRoute SDK CLI!'));
  }
}

// Start the application
const app = new BloxRouteCliApp();
app.run().catch((error) => {
  console.error('Application error:', error);
  process.exit(1);
});