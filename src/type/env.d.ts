declare namespace NodeJS {
  interface ProcessEnv {
    readonly API_KEY: string;
    readonly BEARER_TOKEN: string;
    readonly GITHUB_PERSONAL_ACCESS_TOKEN: string;
  }
}
