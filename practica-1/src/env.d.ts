/// <reference types="vite/client" />

declare interface ImportMetaEnv {
  readonly VITE_API_URL?: string
}

declare interface ImportMeta {
  readonly env: ImportMetaEnv
}

// allow importing .css files
declare module '*.css'

declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any
  }
}
