import type { Metadata } from "next";
import { Montaga } from "next/font/google";
import "./globals.css";

const montaga = Montaga({
  weight: '400',
  subsets: ['latin'],
  display: 'swap'
});

export const metadata: Metadata = {
  title: "Shazab Saifi",
  description: "My Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Monoton&display=swap" />
      </head>
      <body
        className={`${montaga.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
