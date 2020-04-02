const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer');
// const bundleAnalyzerPlugin = BundleAnalyzerPlugin.BundleAnalyzerPlugin;

const prodMode = process.env.NODE_ENV === 'production';

const configs = prodMode
  ? require(`${__dirname}/src/config/configProd`)
  : require(`${__dirname}/src/config/configDev`);

console.info('Mode', process.env.NODE_ENV);
console.info('Config', configs);

const config = {
  entry: [ '@babel/polyfill', 'react-hot-loader/patch', './src/index.js' ],
  devtool: !prodMode ? 'source-map' : '',
  output: {
    publicPath: '/',
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  module: {
    rules: [
      {
        test: [ /\.js$/, /\.jsx$/ ],
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [ 'style-loader', 'css-loader', 'sass-loader' ],
      },
      { test: /\.(config)$/, loader: 'file-loader?name=[name].[ext]' },
      {
        test: /\.(eot|ttf|woff|woff2|otf)$/,
        loader: 'file-loader',
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: require.resolve('url-loader'),
        options: {
          limit: 10000,
          name: 'assets/img/[name].[hash:8].[ext]',
        },
      },
    ],
  },
  plugins: [
    // new bundleAnalyzerPlugin(),
    new CompressionPlugin({
      test: /\.js/,
      algorithm: 'gzip',
    }),
    new HtmlWebpackPlugin({
      favicon: `${__dirname}/src/assets/img/${configs.LOGO}`,
      template: './public/index.html',
      filename: 'index.html',
      title: configs.TITLE,
      inject: 'body',
      minify: {
        collapseWhitespace: true,
      },
      meta: {
        'og:image': `${__dirname}/src/assets/img/${configs.LOGO}`,
      },
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    contentBase: './build',
    hot: true,
    // open: true,
    clientLogLevel: 'warning',
    stats: 'minimal',
    inline: true,
    overlay: true,
    historyApiFallback: true,
    headers: {
      'X-Custom-Header': 'yes',
      'X-Powered-By': 'Fq',
    },
  },
};

module.exports = config;

if (process.env.NODE_ENV === 'production') {
  module.exports.plugins.push(
    new CleanWebpackPlugin([ 'build' ]),
  );
}
