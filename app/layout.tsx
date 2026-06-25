import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz", "SOFT", "WONK"],
});

const siteUrl = "https://belmonte-seguros.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Belmonte Seguros — Soluções de seguros à sua medida",
    template: "%s · Belmonte Seguros",
  },
  description:
    "Mediação de seguros independente em Lisboa. Aconselhamos famílias e empresas e comparamos as melhores soluções de seguros e benefícios de todas as seguradoras a operar em Portugal. Acima de tudo, as pessoas.",
  keywords: [
    "seguros",
    "mediador de seguros",
    "seguro de vida",
    "seguro de saúde",
    "seguro automóvel",
    "seguro de casa",
    "benefícios",
    "Belmonte Seguros",
    "Parque das Nações",
    "Lisboa",
  ],
  authors: [{ name: "Belmonte Seguros" }],
  creator: "Belmonte Seguros",
  openGraph: {
    type: "website",
    locale: "pt_PT",
    url: siteUrl,
    siteName: "Belmonte Seguros",
    title: "Belmonte Seguros — Soluções de seguros à sua medida",
    description:
      "Mediação de seguros independente em Lisboa. Acima de tudo, as pessoas.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Belmonte Seguros — Soluções de seguros à sua medida",
    description:
      "Mediação de seguros independente em Lisboa. Acima de tudo, as pessoas.",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-PT"
      className={`${inter.variable} ${fraunces.variable} antialiased`}
    >
      <body className="min-h-dvh bg-background text-foreground">{children}</body>
    </html>
  );
}
