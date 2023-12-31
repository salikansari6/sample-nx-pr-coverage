/* eslint-disable */
export default {
  displayName: 'sample-nx-pr-coverage',
  preset: '../../jest.preset.js',
  transform: {
    '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': '@nx/react/plugins/jest',
    '^.+\\.[tj]sx?$': ['babel-jest', { presets: ['@nx/react/babel'] }],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../coverage/apps/sample-nx-pr-coverage',
  coverageReporters: ['cobertura', 'lcov', 'text', 'json'],
};
