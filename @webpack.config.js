const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');
const FixStyleOnlyEntriesPlugin = require('webpack-fix-style-only-entries');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');

// 'production' か 'development' を指定
const MODE = 'development';

// production モード以外の場合、変数 enabledSourceMap は true
const enabledSourceMap = process.env.NODE_ENV !== 'production';

module.exports = {
  mode: MODE,
  // エントリーポイントの設定
  entry: {
    // コンパイル対象のファイルを指定
    app: path.resolve(__dirname, '/assets/js/index.js'),
    styles: path.resolve(__dirname, '/assets/scss/styles.scss'),
  },
  // jsの出力設定
  output: {
    clean: true,
    path: path.resolve(__dirname, 'dist'), // 出力先フォルダを絶対パスで指定
    filename: 'js/[name].js', // [name]にはentry:で指定したappが入る
  },
  module: {
    rules: [
      // sassのコンパイル設定
      {
        test: /\.(sa|sc|c)ss$/, // 対象にするファイルを指定
        use: [
          {
            loader: MiniCssExtractPlugin.loader, // JSとCSSを別々に出力する
          },
          {
            loader: 'css-loader',
            options: {
              // オプションでCSS内のurl()メソッドの取り込まない
              url: false,
              // ソースマップの利用有無
              sourceMap: enabledSourceMap,
              // Sass+PostCSSの場合は2を指定
              importLoaders: 2,
            },
          },
          // PostCSSのための設定
          {
            loader: 'postcss-loader', // オプションはpostcss.config.jsで指定
            options: {
              // PostCSS側でもソースマップを有効にする
              sourceMap: enabledSourceMap,
              postcssOptions: {
                // ベンダープレフィックスを自動付与する
                plugins: [['autoprefixer']],
              },
            },
          },
          // Sassをバンドルするための機能
          {
            loader: 'sass-loader',
            options: {
              // ソースマップの利用有無 ファイルがないときはnpm run buildで生成される
              sourceMap: enabledSourceMap,
              sassOptions: {
                outputStyle: 'expanded',
              },
            },
          },
          // 下から順にコンパイル処理が実行されるので、記入順序に注意
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  target: ['web', 'es5'],
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'assets/images'),
          to: path.resolve(__dirname, 'assets/images'),
        },
      ],
    }),
    new ImageMinimizerPlugin({
      test: /\.(png|jpe?g)$/i,
      minimizer: {
        filename: '[path][name][ext].webp',
        implementation: ImageMinimizerPlugin.squooshMinify,
        options: {
          encodeOptions: {
            webp: {
              lossless: 1,
            },
          },
        },
      },
    }),
    new ImageMinimizerPlugin({
      test: /\.(png|jpe?g)$/i,
      minimizer: {
        implementation: ImageMinimizerPlugin.squooshMinify,
        options: {
          encodeOptions: {
            mozjpeg: {
              quality: 85,
            },
            oxipng: {
              level: 3,
              interlace: false,
            },
          },
        },
      },
    }),
    // 出力先のフォルダを一旦空に
    new CleanWebpackPlugin({
      // 対象ファイル指定
      cleanOnceBeforeBuildPatterns: [
        // 複数ある場合は配列で指定
        '**/*', // 出力フォルダ（output: で指定したパス）内のすべてのファイル
      ],
    }),
    new FixStyleOnlyEntriesPlugin(), // CSS別出力時の不要JSファイルを削除
    // CSSをJSにバンドルせず、別ファイルにわける
    new MiniCssExtractPlugin({
      // CSSの出力先
      filename: 'css/[name].css', // 出力ファイル名を相対パスで指定（[name]にはentry:で指定したstylesが入る）
    }),
    new StylelintPlugin({
      configFile: path.resolve(__dirname, 'stylelint.config.js'),
      fix: true, // 自動修正可能なものは修正する
    }),
  ],
  //source-map タイプのソースマップを出力
  devtool: 'source-map',
  // node_modules を監視（watch）対象から除外
  watchOptions: {
    ignored: ['/assets/images/', '/node_modules/'],
  },
};
