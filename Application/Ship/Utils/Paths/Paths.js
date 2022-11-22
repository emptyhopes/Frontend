const { resolve } = require("path");

class Paths extends null {
  static root = process.cwd();

  static paths = {
    absolute: {
      context: resolve(this.root),
      application: resolve(this.root, "Application"),
      output: resolve(this.root, "Build"),
      template: resolve(this.root, "Application", "Ship", "Public", "index.html"),
      assets: resolve(this.root, "Application", "Ship", "Assets"),
      entry: {
        development: {
          index: resolve(this.root, "Application", "Ship", "Utils", "SPA", "index.tsx"),
        },
        production: {
          spa: {
            index: resolve(this.root, "Application", "Ship", "Utils", "SPA", "index.tsx"),
          },
          ssr: {
            index: resolve(this.root, "Application", "Ship", "Utils", "SSR", "index.tsx"),
            server: resolve(this.root, "Application", "Ship", "Utils", "SSR", "Server.tsx"),
          },
        },
      },
    },

    relative: {
      javascript: "javascript",
      html: "",
      styles: "styles",
      images: "assets" + "/" + "images",
      fonts: "assets" + "/" + "fonts",
    },
  };

  static filenames = {
    development: {
      javascript: {
        index: "[name].js",
      },
      html: {
        index: "[name].html",
      },
      styles: {
        index: "[name].css",
        chunk: "[name].chunk.css",
      },
      images: {
        default: "[name].[ext]",
      },
      fonts: {
        default: "[name].[ext]",
      },
    },
    production: {
      javascript: {
        index: "[name].[contenthash].js",
        server: "[name].[contenthash].js",
      },
      html: {
        index: "[name].html",
      },
      styles: {
        index: "[name].[contenthash].css",
        chunk: "[name].[contenthash].chunk.css",
      },
      images: {
        default: "[name].[ext]",
      },
      fonts: {
        default: "[name].[ext]",
      },
    },
  };

  static combined = {
    development: {
      javascript: {
        index: this.paths.relative.javascript + "/" + this.filenames.development.javascript.index,
      },
      html: {
        index: "index.html",
      },
      styles: {
        index: this.paths.relative.styles + "/" + this.filenames.development.styles.index,
        chunk: this.paths.relative.styles + "/" + this.filenames.development.styles.chunk,
      },
      images: {
        default: this.paths.relative.images + "/" + this.filenames.development.images.default,
      },
      fonts: {
        default: this.paths.relative.fonts + "/" + this.filenames.development.fonts.default,
      },
    },
    production: {
      javascript: {
        index: this.paths.relative.javascript + "/" + this.filenames.production.javascript.index,
        server: this.paths.relative.javascript + "/" + this.filenames.production.javascript.server,
      },
      html: {
        index: "index.html",
      },
      styles: {
        index: this.paths.relative.styles + "/" + this.filenames.production.styles.index,
        chunk: this.paths.relative.styles + "/" + this.filenames.production.styles.chunk,
      },
      images: {
        default: this.paths.relative.images + "/" + this.filenames.production.images.default,
      },
      fonts: {
        default: this.paths.relative.fonts + "/" + this.filenames.production.fonts.default,
      },
    },
  };

  static GetAbsolutePath() {
    return resolve(...arguments);
  }
}

module.exports = { Paths };
