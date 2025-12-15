// ---------------------------------------------------------------
// Temporary lightweight type shims for environments that do not
// have Next.js or React installed during type-checking.
// ---------------------------------------------------------------

// Minimal shim for Next.js Metadata
declare module "next" {
  export interface Metadata {
    [key: string]: unknown;
  }
}

// Minimal React shim
declare module "react" {
  export type ReactNode = any;
}

// Minimal JSX shim for intrinsic elements
declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}
