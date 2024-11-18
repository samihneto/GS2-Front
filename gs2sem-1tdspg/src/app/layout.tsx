import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gerasol",
  description: "Criado para a Global Sollution 2",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        {children}
      </body>
    </html>
  );
}
