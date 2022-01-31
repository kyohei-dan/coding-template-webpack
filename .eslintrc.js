module.exports = {
  root: true,
  env: {
    browser: true, // ブラウザでメジャーなもの（documentなど）を許可
    es2021: true, // ES6の書き方許可
    node: true, // 未定義変数エラー対策
  },
  extends: [
    'eslint:recommended', // ESLintおすすめルールの読み込み
    'prettier', // Prettier適用
  ],
  parserOptions: {
    sourceType: 'module',
  },
  rules: {
    semi: ['warn', 'always'], // 末尾にセミコロンがないと警告
    'no-extra-semi': 'warn', // セミコロンがないと警告
    quotes: [
      // シングルクオートを使っていないと警告
      'warn',
      'single',
    ],
  },
};
