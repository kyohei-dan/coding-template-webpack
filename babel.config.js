module.exports = {
  presets: [
    [
      '@babel/preset-env', // 指定した実行環境にあわせて必要な構文変換や、polyfillの読み込みをしてくれるもの
      {
        useBuiltIns: 'usage', // コード内からpolyfillが必要な箇所を自動で判断し、必要なcore-jsを自動でimportしてくれる設定
        corejs: 3, // core-jsのバージョン
      },
    ],
  ],
};
