declare namespace NodeJS {
  interface ProcessEnv {
    JWT_SECRET: string;
    ENCRYPTION_ROUNDS: string;
    DATABASE_USER: string;
    DATABASE_PASSWORD: string;
    DATABASE_NAME: string;
    DATABASE_URL: string;
    COOKIE_NAME: string;
    CLOUDINARY_CLOUD: string;
    CLOUDINARY_API_KEY: string;
    CLOUDINARY_API_SECRET: string;
    UNSPLASH_ACCESS_KEY: string;
    UNSPLASH_SECRET_KEY: string;
  }
}
