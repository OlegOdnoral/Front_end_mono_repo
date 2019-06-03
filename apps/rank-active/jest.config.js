module.exports = {
  name: 'rank-active',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/rank-active',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
