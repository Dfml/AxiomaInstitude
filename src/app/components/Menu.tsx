"use client";

import { Festive } from "next/font/google";
import Image from "next/image";
import React,{ useState } from "react";
import Link from 'next/link';
import { FolderDot } from "lucide-react";
import { UsersRound } from 'lucide-react';
import { GraduationCap } from 'lucide-react';
import { School } from 'lucide-react';
import { UserCog } from 'lucide-react';



interface MenuProps {
  className: string;
  navItems: MenuItemsProps[]
}
interface MenuItemsProps {
    name: string,
    href: string,
    icon: React.ReactNode,
  
}
export const navItems : MenuItemsProps[] = [
  {
    name: "Grupos",
    href: "grupos",
    icon: <UsersRound />
  },
  {
    name: "Gestion de cursos",
    href: "dashboard",
    icon: <FolderDot/>,
  },
  {
    name: "Perfil",
    href: "dashboard",
    icon: <GraduationCap />,
  },

  {
    name: "Maestros",
    href: "dashboard",
    icon: <School />,
  },

  {
    name: "Usuario Admin",
    href: "dashboard",
    icon: <UserCog/>,
  },
];

export default function Menu({ className ,navItems }: MenuProps) {
  return (
    <div className={"w-90 h-screen bg-tangaroa-950 " + className}>
      <div className="border-b-1 mb-3 ">
        <Image
          src="/Menu/LogoMenu.png"
          alt="Logo"
          width={1000}
          height={1000}
          className="w-50 mx-auto pt-5 pb-5 "
        ></Image>
        
      </div>

      <nav className=" w-full flex-col flex  items-start gap-y-1  ">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="flex  hover:text-[rgba(222,183,141,1)]  w-full h-full gap-5  items-center  hover:bg-[rgba(23,50,107,100)]  hover:font-bold  pt-2 pb-2 pl-5  transition-all duration-300  "
          >
            {item.icon}
            <span className="text-[20px]  ">{item.name}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
}
