/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly APP_BACKEND_URL: string
  readonly APP_GOOGLE_MEASURE_ID: string
  readonly APP_GOOGLE_SECRET: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
