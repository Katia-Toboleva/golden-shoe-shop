module.exports = {
  setupFiles: ['<rootDir>/jest/globals.js', 'jest-localstorage-mock'],
  setupFilesAfterEnv: ['<rootDir>setup-tests.js'],
  moduleNameMapper: {
    '^@components(.*)$': '<rootDir>/client/app/components$1',
    '^@containers(.*)$': '<rootDir>/client/app/containers$1',
    '^@routes(.*)$': '<rootDir>/client/app/routes$1',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/client/app/__mocks__/fileMock.js',
    '\\.(css|scss)$': 'identity-obj-proxy',
  },
  snapshotSerializers: ['enzyme-to-json/serializer'],
};
