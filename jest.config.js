module.exports = {
  setupFilesAfterEnv: [
    './jest.setup.js',
  ],
  moduleNameMapper: {
    '\\.css$': '<routeDir>/src/App/Button.jsx',
  },
}
