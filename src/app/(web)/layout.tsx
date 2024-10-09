import type { Metadata } from "next";
import "./globals.css";
import { inter } from "@/data/fonts";

export const metadata: Metadata = {
  title: "QuickPost",
  description: "Written by Amil Jabarli",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
