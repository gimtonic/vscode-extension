declare namespace NodeJS {
  export interface ProcessEnv {
    DB_USERNAME: string;
    DB_PASSWORD: string;
    GITHUB_CLIENT_SECRET: string;
    GITHUB_CLIENT_ID: string;
    ACCESS_TOKEN_SECRET: string;
  }
}
