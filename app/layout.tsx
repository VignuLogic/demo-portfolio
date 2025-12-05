import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Space_Grotesk } from "next/font/google";
import "./../styles/globals.css";
import { ThemeWrapper } from "@/components/global/ThemeWrapper";
import { Navbar } from "@/components/global/Navbar";
import { Footer } from "@/components/global/Footer";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-sans"
});

export const metadata: Metadata = {
  title: "Vigneshwari Subhanji | Aspiring Data Analyst | Python, SQL, Excel",
  description:
    "Aspiring Data Analyst with strong analytical thinking and a passion for converting raw data into meaningful insights. Skilled in Python, SQL, and Excel with a keen interest in solving real-world problems using data-driven approaches.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Vigneshwari Subhanji - Aspiring Data Analyst",
    description:
      "Aspiring Data Analyst skilled in Python, SQL, and Excel. Converting raw data into meaningful insights with data-driven approaches.",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${spaceGrotesk.variable} bg-background text-foreground antialiased`}>
        <ThemeWrapper>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeWrapper>
      </body>
    </html>
  );
}


