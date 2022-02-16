const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const { merge } = require('webpack-merge'); // webpackでdevとprodファイルをmergeするためのやつ
const common = require('./webpack.common.js'); // 共通設定をインポート

module.exports = merge(common, {
  mode: 'production',
  // エントリーポイントの設定
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
  ],
  //source-map タイプのソースマップを出力
  devtool: false,
});
