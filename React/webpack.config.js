var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, './build');
var APP_DIR = path.resolve(__dirname, './app');

var config = {
  entry: APP_DIR + '/index.js',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.DefinePlugin({
      "require.specified": "require.resolve"
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }),
    new webpack.NoErrorsPlugin()
  ],
  devServer: {
      historyApiFallback: true
  },
  module : {
    loaders : [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      { 
        test: /\.css$/, 
        loader: "style-loader!css-loader" 
      },
      { 
        test: /\.png$/, 
        loader: "url-loader?limit=100000" 
      },
      { 
        test: /\.jpg$/, 
        loader: "file-loader" 
      },
      { 
        test: /\.svg$/, 
        loader : 'file-loader' 
      },
      { 
        test: /\.woff$/, 
        loader : 'file-loader' 
      },
      { 
        test: /\.woff2$/, 
        loader : 'file-loader' 
      },
      { 
        test: /\.[ot]tf$/, 
        loader : 'file-loader' 
      },
      { 
        test: /\.eot$/, 
        loader : 'file-loader' 
      },
      { 
        test: /bootstrap.+\.(jsx|js)$/, 
        loader: 'imports?jQuery=jquery,$=jquery,this=>window' 
      },
      { test: /vendor\/.+\.(jsx|js)$/,
        loader: 'imports?jQuery=jquery,$=jquery,this=>window'
      }
    ]
  }
};

module.exports = config;