import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border/60">
      <div className="section-shell flex flex-col items-center gap-3 text-center">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Vigneshwari Subhanji. All rights
          reserved.
        </p>
        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <Link
            href="#hero"
            className="transition-colors hover:text-foreground"
          >
            Back to top
          </Link>
        </div>
      </div>
    </footer>
  );
}


