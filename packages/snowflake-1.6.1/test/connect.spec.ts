import { createConnection } from "snowflake-sdk";
import { timeout } from "../src/timeout";

describe("snowflake-1.6.0", () => {
  it("should timeout", async () => {
    await expect(timeout(createConnection)).rejects.toThrow(
      "Request to Snowflake failed"
    );
  });
});
