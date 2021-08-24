const base = require("./jest.base.js");

/** @type {import('@jest/types').Config.InitialOptions} */
const config = {
  testTimeout: 30000,
  projects: [
    {
      ...base,
      displayName: "@quackware/snowflake-1.6.1 UNIT",

      testMatch: ["**/*.spec.ts"],
      roots: ["<rootDir>/packages/snowflake-1.6.1/test/"],
    },
    {
      ...base,
      displayName: "@quackware/snowflake-1.6.2 UNIT",

      testMatch: ["**/*.spec.ts"],
      roots: ["<rootDir>/packages/snowflake-1.6.2/test/"],
    },
  ],
};

module.exports = config;
