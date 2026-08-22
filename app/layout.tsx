import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Flavio Henrique Pradela | Portfolio Desenvolvedor Junior",
  description:
    "Projetos reais, estudos no SENAI e trajetoria de Flavio Henrique Pradela como desenvolvedor web em busca de vaga junior.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
