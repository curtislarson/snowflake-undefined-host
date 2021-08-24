/** @type {import('@jest/types').Config.InitialOptions} */
const config = {
  preset: "ts-jest",
  testEnvironment: "node",
  testPathIgnorePatterns: ["<rootDir>/node_modules/"],
  moduleFileExtensions: ["ts", "js", "node"],
};

module.exports = config;
