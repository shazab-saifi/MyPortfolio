import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import './globals.css';

const geist = Geist({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Shazab Saifi',
  description: 'My Portfolio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/portfolioLogo.svg" type="image/svg" />
      </head>
      <body className={`${geist.className} antialiased`}>{children}</body>
    </html>
  );
}
