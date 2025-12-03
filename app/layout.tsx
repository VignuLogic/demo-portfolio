import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./../styles/globals.css";
import { ThemeWrapper } from "@/components/global/ThemeWrapper";
import { Navbar } from "@/components/global/Navbar";
import { Footer } from "@/components/global/Footer";

export const metadata: Metadata = {
  title: "Vigneshwari Subhanji (Ava) | Data Analyst, IoT Innovator, Tech Creator",
  description:
    "Portfolio of Vigneshwari Subhanji (Ava) - Data Analyst, IoT Innovator, and Tech Creator turning raw data into meaningful stories and future-ready solutions.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Vigneshwari Subhanji (Ava)",
    description:
      "Data Analyst, IoT Innovator, and Tech Creator turning raw data into meaningful stories and future-ready solutions.",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-background text-foreground antialiased">
        <ThemeWrapper
          children={
            <div className="flex min-h-screen flex-col">
              <Navbar />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          }
        />
      </body>
    </html>
  );
}


