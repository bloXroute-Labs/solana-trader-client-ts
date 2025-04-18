import {
    loadFromEnv
} from "../../bxsolana";

describe('loadFromEnv', () => {
    test('Assert values are loaded', () => {
        const config = loadFromEnv();
        expect(config.authHeader && config.privateKey && config.publicKey)
    });
  });
