import path from 'path';
import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server'; // eslint-disable-line

const GRAPHQL_PORT = 8080;

const compiler = webpack({
  entry: path.resolve(__dirname, 'app', 'app.js'),
  module: {
    loaders: [
      {
        exclude: /node_modules/,
        loader: 'babel-loader',
        test: /\.js$/,
      }, {
        loader: 'json-loader',
        test: /\.json$/,
      }, {
        loader: 'style-loader!css-loader!sass-loader',
        test: /\.sass$/,
      },
    ],
  },
  output: {
    filename: 'app.js',
    path: '/',
  },
});

export default new WebpackDevServer(compiler, {
  compress: true,
  contentBase: '/lib/public/',
  disableHostCheck: true,
  proxy: { '/graphql': `http://localhost:${GRAPHQL_PORT}` },
  publicPath: '/lib/app/',
  stats: { colors: true },
});
