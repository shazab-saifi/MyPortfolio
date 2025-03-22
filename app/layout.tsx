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
        <link rel="icon" href="/myavatar.svg" type="image/svg" />
      </head>
      <body
        className={`${montaga.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
