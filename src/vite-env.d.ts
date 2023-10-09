/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly APP_BACKEND_URL: string
  readonly APP_GOOGLE_MEASURE_ID: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
