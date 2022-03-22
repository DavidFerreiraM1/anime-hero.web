module.exports = {
  testEnvironment: 'jsdom',
  collectCoverage: true,
  testPathIgnorePatterns: ['/node_modules', '/.next/'],
  testMatch: ['**/?(*.)+(spec|test).[tj]s?(x)'],
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  preset: 'ts-jest',
  globals: {
    'ts-jest': {
      tsconfig: {
        jsx: 'react'
      }
    }
  }
};
