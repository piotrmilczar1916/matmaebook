import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MATMA NA 30% — Ebook do poprawki matury",
  description:
    "Plan ratunkowy do poprawy matury podstawowej z matematyki w sierpniu. 30-dniowy plan, pewniaki i strategia na 30%.",
  openGraph: {
    title: "MATMA NA 30%",
    description:
      "Plan ratunkowy do poprawy matury podstawowej z matematyki.",
    type: "website",
    locale: "pl_PL",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className={`${inter.variable} h-full scroll-smooth`}>
      <body className="min-h-full font-sans antialiased">{children}</body>
    </html>
  );
}
