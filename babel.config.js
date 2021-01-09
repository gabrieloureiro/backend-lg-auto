module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          node: "current",
        },
      },
    ],
    "@babel/preset-typescript",
  ],
  plugins: [
    [
      "module-resolver",
      {
        alias: {
          "@config": "./src/config",
          "@middlewares": "./src/middlewares",
          "@repositories": "./src/repositories",
          "@models": "./src/models",
          "@services": "./src/services",
        },
      },
    ],
  ],
  ignore: ["**/*.spec.ts"],
};
