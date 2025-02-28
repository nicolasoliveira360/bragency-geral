import type { Metadata } from "next";
import { Montserrat, Roboto } from "next/font/google";
import "./globals.css";
import "../styles/base-layout.css";
import WhatsAppButton from "@/components/WhatsAppButton";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "BR Agency | Agência de Marketing Digital",
  description: "Transformando ideias em resultados digitais. Estratégias personalizadas de marketing digital para impulsionar seu negócio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
      </head>
      <body
        className={`${montserrat.variable} ${roboto.variable} font-sans antialiased bg-[var(--color-bg-primary)] text-[var(--color-text-primary)]`}
        style={{
          backgroundImage: `url('/background.svg')`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      >
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
