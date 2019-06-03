const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const FixStyleOnlyEntriesPlugin = require("webpack-fix-style-only-entries");

module.exports = {
  entry: {
    'vanilla-image-uploader': './src/js/vanilla-image-uploader.js',
    demo: ['./src/js/demo.js', './src/sass/demo.scss'],
    'theme-flat': './src/sass/themes/flat.scss',
    'theme-round': './src/sass/themes/round.scss',
  },
  output: {
    filename: 'js/[name].js',
    path: path.resolve(__dirname, 'dist'),
    library: {
      root: 'vanillaImageUploader',
      commonjs: 'vanilla-image-uploader',
      amd: 'vanilla-image-uploader'
    },
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.js$/, // include .js files
        enforce: 'pre', // preload the jshint loader
        exclude: /node_modules/, // exclude any and all files in the node_modules folder
        use: [{
          loader: 'babel-loader'
        }]
      },
      {
        test: /\.(s*)css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV === 'development',
            },
          },
          'css-loader', 'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new FixStyleOnlyEntriesPlugin(),
    new MiniCssExtractPlugin({ // define where to save the file
      filename: 'css/[name].css',
      chunkFilename: 'css/[id].css',
    }),
  ],
}