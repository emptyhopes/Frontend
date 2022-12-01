const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");
const CSSMinimizerWebpackPlugin = require("css-minimizer-webpack-plugin");

const { Utils } = require("../../../webpack.utils.js");
const { Paths } = require("../../../../Paths/Paths.js");

const Production = {
  ...Utils.defaults,

  mode: "production",

  entry: {
    index: Paths.paths.absolute.entry.production.spa.index,
  },

  output: {
    ...Utils.defaults.output,
    filename: Paths.combined.production.javascript.spa.index,
  },

  optimization: {
    ...Utils.defaults.optimization,

    minimize: true,

    minimizer: [
      new TerserWebpackPlugin({
        extractComments: {
          condition: true,
          filename: (file) => {
            return `${file.filename}.LICENSE.txt${file.query}`;
          },
          banner: (file) => {
            return `License information can be found in ${file}`;
          },
        },

        terserOptions: {
          compress: true,
        },
      }),

      new CSSMinimizerWebpackPlugin({
        minimizerOptions: {
          preset: [
            "default",
            {
              discardComments: { removeAll: true },
            },
          ],
        },
      }),
    ],
  },

  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },

  plugins: [
    ...Utils.plugins,

    new HTMLWebpackPlugin({
      template: Paths.paths.absolute.template.index,
      filename: Paths.combined.production.html.index,

      minify: true,
    }),

    new MiniCSSExtractPlugin({
      filename: Paths.combined.production.styles.index,
      chunkFilename: Paths.combined.production.styles.chunk,
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

module.exports = Production;
