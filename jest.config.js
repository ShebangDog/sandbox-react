/** @type {import('jest').Config} */
const config = {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  moduleNameMapper: {
    '\\.(css|less|scss)$': 'identity-obj-proxy',
    '\\.svg$': '<rootDir>/src/__mocks__/fileMock.js',
  },
  testMatch: ['<rootDir>/src/**/*.test.(ts|tsx)'],
};

module.exports = config;
