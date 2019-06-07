module.exports = {
  name: 'auth-header',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/auth/header',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
