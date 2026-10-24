import type { Metadata, Viewport } from "next";
import { JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const display = Space_Grotesk({ subsets: ["latin"], variable: "--font-display", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });

const title = "Flávio Henrique · Desenvolvedor Web";
const description =
  "Portfólio de Flávio Henrique Furlanetto Pradela: sites, lojas online e sistemas com painel administrativo em uso por clientes reais.";

export const metadata: Metadata = {
  metadataBase: new URL("https://portifolio-flavio-3273e-5ddc3.web.app"),
  title,
  description,
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title,
    description,
    type: "website",
    locale: "pt_BR",
    images: [{ url: "/flavio-henrique.webp", width: 854, height: 1280 }],
  },
};

export const viewport: Viewport = {
  themeColor: "#05070b",
  colorScheme: "dark",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${display.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
