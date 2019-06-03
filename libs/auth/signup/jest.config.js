module.exports = {
  name: 'auth-signup',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/auth/signup',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
