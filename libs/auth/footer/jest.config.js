module.exports = {
  name: 'auth-footer',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/auth/footer',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
