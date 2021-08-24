# Snowflake Undefined Host

For https://github.com/snowflakedb/snowflake-connector-nodejs/issues/193

```bash
npm i && npm test
```

Code is the same, just different `snowflake-sdk` versions.

`packages/snowflake-1.6.1` times out as expected

```bash
PASS   @quackware/snowflake-1.6.1 UNIT  packages/snowflake-1.6.1/test/connect.spec.ts (13.432 s)
```

`packages/snowflake-1.6.2` hits the following error

```bash
 FAIL   @quackware/snowflake-1.6.2 UNIT  packages/snowflake-1.6.2/test/connect.spec.ts
  ● snowflake-1.6.2 › should timeout

    expect(received).rejects.toThrow(expected)

    Expected substring: "Request to Snowflake failed"
    Received message:   "Cannot read property 'endsWith' of undefined"

          17 | export const timeout = async (createConnection: CreateType) => {
          18 |   return new Promise((resolve, reject) => {
        > 19 |     createConnection(OPTS).connect((err: Error | null, conn) => {
             |                            ^
          20 |       if (err === null) {
          21 |         resolve(conn);
          22 |       } else {

          at Connection.connect (packages/snowflake-1.6.2/node_modules/snowflake-sdk/lib/connection/connection.js:144:31)
          at packages/snowflake-1.6.2/src/timeout.ts:19:28
          at Object.timeout (packages/snowflake-1.6.2/src/timeout.ts:18:10)
          at Object.<anonymous> (packages/snowflake-1.6.2/test/connect.spec.ts:6:18)

      4 | describe("snowflake-1.6.2", () => {
      5 |   it("should timeout", async () => {
    > 6 |     await expect(timeout(createConnection)).rejects.toThrow(
        |                                                     ^
      7 |       "Request to Snowflake failed"
      8 |     );
      9 |   });

      at Object.toThrow (node_modules/expect/build/index.js:285:22)
      at Object.<anonymous> (packages/snowflake-1.6.2/test/connect.spec.ts:6:53)
```

[Link to code](https://github.com/snowflakedb/snowflake-connector-nodejs/blob/fd9e5b3cccd9e99063aed80a47695515ca6cffe8/lib/connection/connection.js#L144-L147)
