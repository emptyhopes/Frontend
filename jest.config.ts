module.exports = {
  testEnvironment: "jsdom",

  moduleFileExtensions: ["json", "js", "jsx", "ts", "tsx", "css", "scss", "sass"],

  moduleNameMapper: {
    "\\.(css|sass|scss)$": "identity-obj-proxy",

    "^@/(.*)$": "<rootDir>/$1",
  },

  transform: {
    "\\.(svg|png|jpg|jpeg)$": "<rootDir>/Application/Ship/Tests/FileTransformer.ts",
  },

  setupFilesAfterEnv: ["<rootDir>/Application/Ship/Tests/Setup.ts"],
};
