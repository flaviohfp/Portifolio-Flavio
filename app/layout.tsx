import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Flavio Henrique Furlanetto Pradela | Portfolio",
  description:
    "Portfolio de desenvolvedor de Flavio Henrique Furlanetto Pradela, com estudos, projetos, atendimento a clientes, IA e resolucao de problemas.",
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
