import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

import Menu, { navItems} from "@/app/components/Menu"


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return  (

    <div className="flex bg-putty-50   ">
     <Menu navItems={navItems} className=""></Menu>
      <div className="flex w-full  py-19 px-25">{children}</div>
      
    </div>
    );
  }

