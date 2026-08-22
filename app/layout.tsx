import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Flavio Henrique Furlanetto Pradela | Portfolio",
  description:
    "Portfolio pessoal de Flavio Henrique Furlanetto Pradela com historia, tecnologia, tradicionalismo, estudos e projetos desenvolvidos.",
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
