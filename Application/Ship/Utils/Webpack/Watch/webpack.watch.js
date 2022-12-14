const EslintWebpackPlugin = require("eslint-webpack-plugin");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");

const { Utils } = require("../webpack.utils.js");
const { Paths } = require("../../Paths/Paths.js");

const Watch = {
  ...Utils.defaults,

  mode: "development",
  devtool: "source-map",

  entry: {
    index: Paths.paths.absolute.entry.development.index,
  },

  output: {
    ...Utils.defaults.output,
    filename: Paths.combined.development.javascript.index,
  },

  devServer: {
    port: 80,

    open: false,
    hot: true,

    historyApiFallback: true,

    compress: true,

    client: {
      progress: false,

      overlay: {
        errors: true,
        warnings: true,
      },
    },
  },

  plugins: [
    ...Utils.plugins,

    new EslintWebpackPlugin({
      extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
    }),

    new HTMLWebpackPlugin({
      template: Paths.paths.absolute.template.index,
      filename: Paths.combined.development.html.index,

      minify: false,
    }),

    new MiniCSSExtractPlugin({
      filename: Paths.combined.development.styles.index,
      chunkFilename: Paths.combined.development.styles.chunk,
    }),
  ],

  module: {
    rules: [
      ...Utils.rules,

      {
        test: /\.(svg|png|jpg|jpeg|webp)$/,
        ...Utils.AssetsLoader(Paths.combined.development.images.default),
      },
      {
        test: /\.(ttf|woff|woff2|eot)$/,
        ...Utils.AssetsLoader(Paths.combined.development.fonts.default),
      },
      {
        test: /\.css$/,
        use: Utils.StylesLoader([]),
      },
      {
        test: /\.s[ac]ss$/,
        use: Utils.StylesLoader([{ loader: "sass-loader" }]),
      },
    ],
  },
};

module.exports = Watch;
