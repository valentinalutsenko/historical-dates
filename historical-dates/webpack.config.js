const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "build"),
  },
  plugins: [
    new htmlWebpackPlugin({
      template: "./src/index.html",
      favicon: "./src/favicon.svg",
    }),
  ],
  module: {
    strictExportPresence: true,
    rules: [
      {
        test: /.(tsx|ts)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-typescript",
            ],
          },
        },
      },
      {
        test: /\.(scss|css)$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.module\.s(a|c)ss$/,
        loader: [
          { loader: "style-loader" },
          {
            loader: "css-loader",
            options: {
              modules: true,
              sourceMap: true,
            },
          },
          { loader: "sass-loader" },
        ],
      },
      {
        test: /\.module.css$/,
        use: [
          {
            loader: "css-loader",
            options: {
              modules: true,
            },
          },
        ],
      },
    ],
  },
  devServer: {
    port: 7000,
    open: true,
    hot: false,
  },
};
