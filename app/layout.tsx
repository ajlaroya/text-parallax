import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Text Parallax Animation Demo",
  description: "Created by Arthur Laroya",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.className} antialiased scroll-smooth`}>
      <body
        
      >
        {children}
      </body>
    </html>
  );
}
