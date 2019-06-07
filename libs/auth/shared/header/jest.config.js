module.exports = {
  name: 'auth-shared-header',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/auth/header',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
