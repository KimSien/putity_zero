module.exports = {
  verbose: true,
  transform:{
    '^.+\\.js$'  : '<rootDir>/node_modules/babel-jest',

  },
  moduleFileExtensions: ['js'] // テスト対象の拡張子を列挙する
};
