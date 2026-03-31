import "./globals.css";

export const metadata = {
  title: "ThunderDown - Download rápido e seguro",
  description: "Plataforma rápida para baixar vídeos e músicas.",
  
  openGraph: {
    title: "ThunderDown",
    description: "Baixe vídeos e músicas facilmente.",
    url: "https://thunderdown.com",
    siteName: "Thunder Down",
    images: [
      {
        url: "/icon.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "pt_PT",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "ThunderDown",
    description: "Download rápido e seguro",
    images: ["/icon.png"],
  },
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
