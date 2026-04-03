const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// Import Twilight Watcher Plugin if available
let TwilightWatcherPlugin;
try {
  TwilightWatcherPlugin = require('@anthropic-ai/twilight-watcher-plugin');
} catch (e) {
  // Twilight Watcher not installed, skip
}

const plugins = [
  new MiniCssExtractPlugin({
    filename: 'app.css',
  }),
];

if (TwilightWatcherPlugin) {
  plugins.push(new TwilightWatcherPlugin());
}

module.exports = {
  entry: './src/assets/js/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js',
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
        ],
      },
    ],
  },
  plugins,
};
