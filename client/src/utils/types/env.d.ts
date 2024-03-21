declare namespace NodeJS {
  interface ProcessEnv {
    readonly DATABASE_URL: string;
    readonly DIRECT_URL: string;
    readonly GOOGLE_AUTH_CLIENT_ID: string;
    readonly GOOGLE_AUTH_CLIENT_SECRET: string;
    readonly NEXTAUTH_SECRET: string;
    readonly NEXTAUTH_URL: string;
  }
}
