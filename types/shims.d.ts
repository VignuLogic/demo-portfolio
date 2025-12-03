// Temporary lightweight type shims so the project can type-check
// even in environments where npm dependencies are not installed.

declare module "next" {
  export interface Metadata {
    [key: string]: unknown;
  }
}

declare module "react" {
  export type ReactNode = unknown;
}

declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}


