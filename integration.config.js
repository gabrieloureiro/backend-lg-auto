const { compilerOptions } = require("./tsconfig.json");
const { pathsToModuleNameMapper } = require("ts-jest/utils");

module.exports = {
  preset: "ts-jest",
  rootDir: ".",
  roots: ["<rootDir>/tests/integration"],
  clearMocks: true,
  testEnvironment: "node",
  setupFilesAfterEnv: ["./tests/integration/setup.ts"],
  collectCoverage: true,
  collectCoverageFrom: ["src/**"],
  coverageDirectory: "tests/integration/coverage",
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: "<rootDir>/tests/integration",
  })
}
