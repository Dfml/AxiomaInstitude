import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

import Menu, { navItems} from "@/app/components/Menu"


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return  (
    <div className="flex bg-putty-600   ">
     <Menu navItems={navItems} className=""></Menu>
      {children}
      
      </div>
    );
  }

