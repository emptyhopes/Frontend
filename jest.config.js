module.exports = {
  moduleFileExtensions: ["json", "js", "jsx", "ts", "tsx", "css", "scss", "sass"],

  moduleNameMapper: {
    "\\.(css|sass|scss)$": "identity-obj-proxy",

    "^@/(.*)$": "<rootDir>/$1",
  },

  testEnvironment: "jsdom",
};
