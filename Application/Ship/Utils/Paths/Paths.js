const { resolve } = require("path");

class Paths extends null {
  static root = process.cwd();

  static paths = {
    absolute: {
      context: resolve(this.root),
      application: resolve(this.root, "Application"),
      output: resolve(this.root, "Build", "static"),
      template: {
        index: resolve(this.root, "Application", "Ship", "Public", "index.html"),
      },
      assets: resolve(this.root, "Application", "Ship", "Assets"),
      entry: {
        development: {
          index: resolve(this.root, "Application", "Ship", "Utils", "Application", "Development", "index.tsx"),
        },
        production: {
          spa: {
            index: resolve(this.root, "Application", "Ship", "Utils", "Application", "Production", "SPA", "index.tsx"),
          },
          ssr: {
            index: resolve(this.root, "Application", "Ship", "Utils", "Application", "Production", "SSR", "index.tsx"),
            server: resolve(
              this.root,
              "Application",
              "Ship",
              "Utils",
              "Application",
              "Production",
              "SSR",
              "Server.tsx",
            ),
          },
        },
      },
    },

    relative: {
      javascript: {
        development: {
          index: "javascript",
        },
        production: {
          spa: {
            index: "javascript",
          },
          ssr: {
            index: "javascript",
            server: "server",
          },
        },
      },
      styles: "styles",
      images: "assets" + "/" + "images",
      fonts: "assets" + "/" + "fonts",
    },
  };

  static filenames = {
    development: {
      html: {
        index: "index.html",
      },
      javascript: {
        index: "[name].js",
      },
      styles: {
        index: "[name].css",
        chunk: "[name].chunk.css",
      },
      images: {
        default: "[name][ext]",
      },
      fonts: {
        default: "[name][ext]",
      },
    },
    production: {
      html: {
        index: "index.html",
      },
      javascript: {
        index: "[name].[contenthash].js",
        server: "[name].[contenthash].js",
      },
      styles: {
        index: "[name].[contenthash].css",
        chunk: "[name].[contenthash].chunk.css",
      },
      images: {
        default: "[name][ext]",
      },
      fonts: {
        default: "[name][ext]",
      },
    },
  };

  static combined = {
    development: {
      javascript: {
        index: this.paths.relative.javascript.development.index + "/" + this.filenames.development.javascript.index,
      },
      html: {
        index: this.filenames.development.html.index,
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
        spa: {
          index: this.paths.relative.javascript.production.spa.index + "/" + this.filenames.production.javascript.index,
        },
        ssr: {
          index: this.paths.relative.javascript.production.ssr.index + "/" + this.filenames.production.javascript.index,
          server:
            this.paths.relative.javascript.production.ssr.server + "/" + this.filenames.production.javascript.server,
        },
      },
      html: {
        index: this.filenames.production.html.index,
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
