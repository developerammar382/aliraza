
/// <reference types="vite/client" />
/// <reference path="./types/jsx.d.ts" />

// Add proper three.js support for React Three Fiber
interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
