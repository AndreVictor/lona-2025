import type { Metadata } from "next";
import "@/styles/globals.scss";
import Layout from "@/components/Layout";

export const metadata: Metadata = {
  title: "Mostra LONA 2025",
  description: "Mostra LONA - Cinemas e Territórios 2025. Realização MLB - Movimento de Luta nos Bairros Vilas e Favelas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Archivo:ital,wdth,wght@0,62..125,100..900;1,62..125,100..900&family=BIZ+UDMincho&family=Noto+Serif:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}
