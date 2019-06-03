module.exports = {
  name: 'data-for-seo',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/data-for-seo',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
