import s from "snowflake-sdk";

type Opts = s.ConnectionOptions & {
  accessUrl: string;
};

const OPTS: Opts = {
  accessUrl: "https://quack.snowflakecomputing.com",
  username: "Quack",
  password: "Quack",
  database: "StaleBread",
  warehouse: "Foods",
};

type CreateType = (options: s.ConnectionOptions) => s.Connection;

export const timeout = async (createConnection: CreateType) => {
  return new Promise((resolve, reject) => {
    createConnection(OPTS).connect((err: Error | null, conn) => {
      if (err === null) {
        resolve(conn);
      } else {
        reject(err);
      }
    });
  });
};
