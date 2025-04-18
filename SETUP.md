# Running Tests

This guide overviews how to run unit and integration tests for this SDK, found in `/tests`. 

## Step 1: Install Required Packages

```bash
# Using npm
npm install --save-dev jest ts-jest @types/jest

# Using yarn
yarn add --dev jest ts-jest @types/jest
```

## Step 2: Configure Jest for TypeScript

Configurations are defined in `jest.config.cjs` in the root directory of this repository:

```javascript
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  // Matches test files ending with .test.ts or .spec.ts
  testMatch: ['**/*.test.ts', '**/*.spec.ts'],
};
```

## Step 3: Install VS Code Extensions

Extension: **Jest Runner** (by firsttris).

## Step 4: Update package.json Scripts

Tests can be run via `npm run test` being that it is defined as as script in `package.json`

```json
"scripts": {
  "test": "jest",
  "test:watch": "jest --watch"
}
```

## Step 5: Writing tests

Unit tests should be placed in `tests/unit/` and integration tests should be placed in `tests/integration`.

Filenames should end with "*.test.ts*".

The general test format is as follows:

```typescript
// example.test.ts
function sum(a: number, b: number): number {
  return a + b;
}

describe('Sum function', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
  
  test('adds 5 + 5 to equal 10', () => {
    expect(sum(5, 5)).toBe(10);
  });
});
```
---

Refer to Jest`s official [documentation](https://jestjs.io/docs/getting-started) for more information.