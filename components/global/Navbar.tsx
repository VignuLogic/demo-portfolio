"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const sections = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "resume", label: "Resume" },
  { id: "contact", label: "Contact" }
];

export function Navbar() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = theme ?? resolvedTheme ?? "dark";

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <nav className="container-page flex h-16 items-center justify-between gap-4">
        <Link href="#hero" className="flex items-center gap-2">
          <div className="glass-surface flex h-9 w-9 items-center justify-center text-sm font-semibold">
            AV
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-foreground">
              Vigneshwari Subhanji
            </span>
            <span className="text-xs text-muted-foreground">Ava</span>
          </div>
        </Link>
        <div className="hidden items-center gap-6 md:flex">
          {sections.map((section) => (
            <Link
              key={section.id}
              href={`#${section.id}`}
              className="text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {section.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-3">
          {mounted && (
            <Button
              size="icon"
              variant="ghost"
              aria-label="Toggle theme"
              onClick={() =>
                setTheme(currentTheme === "dark" ? "light" : "dark")
              }
            >
              <span className="text-sm">
                {currentTheme === "dark" ? "☾" : "☼"}
              </span>
            </Button>
          )}
          <div className="md:hidden">
            <Button asChild variant="glass" size="sm">
              <Link href="#contact">Contact</Link>
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
}


