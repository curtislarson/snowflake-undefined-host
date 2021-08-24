import "snowflake-sdk";

declare module "snowflake-sdk" {
  export interface ConnectionOptions {
    accessUrl: string;
    account?: string;
  }
}
