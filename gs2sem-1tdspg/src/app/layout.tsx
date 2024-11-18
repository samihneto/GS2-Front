import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
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
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
