const config = {
  testEnvironment: "jsdom",

  moduleFileExtensions: ["json", "js", "jsx", "ts", "tsx", "css", "scss", "sass"],

  setupFilesAfterEnv: ["<rootDir>/Application/Ship/Tests/Setup.ts"],

  moduleNameMapper: {
    "\\.(css|sass|scss)$": "identity-obj-proxy",

    "^@/(.*)$": "<rootDir>/$1",
  },

  transform: {
    "\\.(svg|png|jpg|jpeg)$": "<rootDir>/Application/Ship/Tests/FileTransformer.js",
    "^.+\\.tsx?$": ["ts-jest"],
  },
};

export default { ...config };
