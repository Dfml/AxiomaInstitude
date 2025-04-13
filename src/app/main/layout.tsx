import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return 
  <>
      {children}
  </>;
}
