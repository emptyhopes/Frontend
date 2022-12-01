const { resolve } = require("path");

const { ProvidePlugin } = require("webpack");

const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");

const { Paths } = require("../Paths/Paths.js");

class Utils extends null {
  static copy = {
    patterns: [
      {
        from: resolve(Paths.paths.absolute.assets, "Images", "Icons"),
        to: resolve(Paths.paths.absolute.output, "assets", "images", "icons"),
      },
      {
        from: resolve(Paths.paths.absolute.assets, "SEO", "robots.txt"),
        to: Paths.paths.absolute.output,
      },
      {
        from: resolve(Paths.paths.absolute.assets, "PWA", "Modules", "ServiceWorkers.js"),
        to: Paths.paths.absolute.output,
      },
      {
        from: resolve(Paths.paths.absolute.assets, "PWA", "Manifest", "manifest.json"),
        to: Paths.paths.absolute.output,
      },
    ],
  };

  static alias = {
    "@": Paths.GetAbsolutePath(Paths.root),
  };

  static extensions = [
    ".json",
    ".js",
    ".jsx",
    ".ts",
    ".tsx",
    ".html",
    ".css",
    ".scss",
    ".sass",
    ".svg",
    ".png",
    ".jpg",
    ".jpeg",
    ".webp",
    ".ttf",
    ".woff",
    ".woff2",
    ".eot",
  ];

  static rules = [
    {
      test: /\.js$/,
      exclude: /(node_modules)/,
      use: this.JavascriptLoader(),
    },
    {
      test: /\.jsx$/,
      exclude: /(node_modules)/,
      use: this.JavascriptLoader(),
    },
    {
      test: /\.ts$/,
      exclude: /(node_modules)/,
      use: this.JavascriptLoader(),
    },
    {
      test: /\.tsx$/,
      exclude: /(node_modules)/,
      use: this.JavascriptLoader(),
    },
  ];

  static plugins = [
    new ProvidePlugin({ React: "react" }),

    new CopyWebpackPlugin({
      patterns: this.copy.patterns,
    }),
  ];

  static defaults = {
    context: Paths.paths.absolute.context,

    target: "web",

    output: {
      path: Paths.paths.absolute.output,
      clean: true,
    },

    resolve: {
      alias: this.alias,
      extensions: this.extensions,
    },

    optimization: {
      splitChunks: {
        cacheGroups: {
          vendor: {
            name: "vendor",
            test: /node_modules/,
            chunks: "all",
            enforce: true,
          },
        },
      },
    },
  };

  static JavascriptLoader() {
    const loader = {
      loader: "babel-loader",
      options: { babelrc: true },
    };

    return loader;
  }

  static AssetsLoader(filename) {
    const loader = {
      type: "asset/resource",
      generator: {
        filename: filename,
      },
    };

    return loader;
  }

  static StylesLoader(loaders) {
    const loader = [{ loader: MiniCSSExtractPlugin.loader }, { loader: "css-loader" }, ...loaders];

    return loader;
  }
}

module.exports = { Utils };
