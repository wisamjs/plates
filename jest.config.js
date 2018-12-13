module.exports = {
  collectCoverageFrom: ['src/**/*'],
  coverageThreshold: {
    global: {
      branches: 32,
      functions: 13,
      lines: 13,
      statements: 17,
    },
  },
  coverageDirectory: 'test-reports',
  preset: 'react-native',
  transform: {
    '^.+\\.js$': '<rootDir>/node_modules/react-native/jest/preprocessor.js',
  },
  testPathIgnorePatterns: ['/node_modules/'],
  automock: false,
  setupFiles: ['./setupJest.js'],
};
