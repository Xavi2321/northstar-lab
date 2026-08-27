import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://northstar-lab-xavi2321.teal-pine-5167.chatgpt.site'),
  title: 'Northstar Lab — Simulador de decisiones para pymes',
  description: 'Caso de negocio interactivo para explorar precio, demanda, costes y rentabilidad.',
  openGraph: {
    title: 'Northstar Lab',
    description: 'Decisiones de negocio, antes de gastar.',
    images: ['/og.png'],
    locale: 'es_ES',
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Northstar Lab', description: 'Decisiones de negocio, antes de gastar.', images: ['/og.png'] },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
