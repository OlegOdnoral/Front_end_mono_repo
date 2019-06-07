module.exports = {
  name: 'auth-shared-social-buttons',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/libs/auth/shared/social-buttons',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
