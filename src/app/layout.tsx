import { Lilita_One, Lato } from "next/font/google";
import "./globals.css";

const lato = Lato({ weight: ["100", "300", "400", "700", "900"], subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={lato.className}>{children}</body>
    </html>
  );
}
