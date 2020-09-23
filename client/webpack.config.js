const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const plugins = () => {
  const base = [
    new HTMLWebpackPlugin({
      template: "./index.html",
    }),
    new CleanWebpackPlugin(), 

    new MiniCssExtractPlugin({
      filename: "[name].[hash].css",
    }),
  ];

  return base;
};

module.exports = {
  context: path.resolve(__dirname, "src"),
  mode: "development",
  entry: ["@babel/polyfill", "./index.js", "./index.scss"],
  output: {
    filename: "[name].bundle.js", 
    path: path.resolve(__dirname, "dist"), 
  },
  resolve: {
    extensions: [".js", ".jsx", ".json", ".scss", ".sass"], 
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@store": path.resolve(__dirname, "src/store"),
    },
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  devServer: {
    port: 4200,
    hot: true,
  },
  devtool: "source-map",
  plugins: plugins(),
  module: {
    rules: [
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: true,
              reloadAll: true,
               emitWarning: false,
            },
          },
          "css-loader",
          "sass-loader",
        ],
        
      },
      {
        enforce: "pre",
        test: /\.(js|jsx)/,
        exclude: /node_modules/,
        loader: "eslint-loader",
      },
      {
        test: /\.(js|jsx)/,
        exclude: /node_modules/,
        loader: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
            plugins: ["@babel/plugin-proposal-class-properties"],
          },
        },
      },
    ],
  },
};
