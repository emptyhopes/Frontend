const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");
const CSSMinimizerWebpackPlugin = require("css-minimizer-webpack-plugin");
const WebpackNodeExternals = require("webpack-node-externals");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

const { Utils } = require("./webpack.utils.js");
const { Paths } = require("./Application/Ship/Utils/Paths/Paths.js");

const ProductionClientSSR = {
  ...Utils.defaults,

  mode: "production",

  entry: {
    index: Paths.paths.absolute.entry.production.index,
  },

  output: {
    ...Utils.defaults.output,
    filename: Paths.combined.production.javascript.index,
    clean: false,
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

      new BundleAnalyzerPlugin({
        analyzerMode: "disabled",
        generateStatsFile: true,
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
      template: Paths.paths.absolute.template,
      filename: Paths.combined.production.html.index,

      minify: {
        collapseWhitespace: true,
      },
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

const ProductionServerSSR = {
  ...Utils.defaults,

  mode: "production",
  target: "node",

  entry: {
    server: Paths.paths.absolute.entry.production.server,
  },

  output: {
    ...Utils.defaults.output,
    filename: Paths.combined.production.javascript.server,
  },

  externals: [WebpackNodeExternals()],

  module: {
    rules: [...Utils.rules],
  },
};

module.exports = [ProductionServerSSR, ProductionClientSSR];
