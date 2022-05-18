module.exports = {
  collectCoverageFrom: ['**/*.{js,jsx,ts,tsx}', '!**/*.d.ts', '!**/node_modules/**'],
  moduleNameMapper: {
    /* Handle CSS imports (with CSS modules)
    https://jestjs.io/docs/webpack#mocking-css-modules */
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',

    // Handle CSS imports (without CSS modules)
    '^.+\\.(css|sass|scss)$': '<rootDir>/__mocks__/styleMock.js',

    /* Handle image imports
    https://jestjs.io/docs/webpack#handling-static-assets */
    '^.+\\.(jpg|jpeg|png|gif|webp|svg)$': '<rootDir>/__mocks__/fileMock.js',
    '^components(.*)$': '<rootDir>/src/components/$1',
    '^constants/(.*)$': '<rootDir>/src/constants/$1',
    '^hooks/(.*)$': '<rootDir>/src/hooks/$1',
    '^images/(.*)$': '<rootDir>/src/images/$1',
    '^pages(.*)$': '<rootDir>/src/pages/$1',
    '^services(.*)$': '<rootDir>/src/services/$1',
    '^styles(.*)$': '<rootDir>/src/styles/$1',
    '^utils/(.*)$': '<rootDir>/src/utils/$1',
    '^mocks/(.*)$': '<rootDir>/src/mocks/$1',
    '^context/(.*)$': '<rootDir>/src/context/$1',
  },
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/'],
  testEnvironment: 'jsdom',
  transform: {
    /* Use babel-jest to transpile tests with the next/babel preset
    https://jestjs.io/docs/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object */
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
  },
  transformIgnorePatterns: ['/node_modules/', '^.+\\.module\\.(css|sass|scss)$'],
  setupFilesAfterEnv: ['<rootDir>/src/setup-test-env.js'],
  snapshotSerializers: ['@emotion/jest/serializer'],
};