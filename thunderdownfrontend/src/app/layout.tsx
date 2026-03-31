import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Thunder Down",
  description: "Site para ouvir e baixar musicas e videos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-AO"
      className={` h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
