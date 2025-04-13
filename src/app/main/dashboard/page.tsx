"use client";

import Image from "next/image";
import TextBox from "@/app/components/TextBox";
import { useState } from "react";
import Button from "@/app/components/Button";

export default function Home() {
  const [Correo, setCorreo] = useState("");
  const [Password, setPassword] = useState("");

  return (
    <div className=" flex justify-center content-center items-center w-full h-screen bg-putty-50 ">
      <div className="w-120 p-10 bg-putty-100 shadow-lg rounded-xl flex flex-col items-center">
        <Image
          src="/login/logo.png"
          alt="Logo"
          width={1000}
          height={1000}
          className="w-34 mx-auto "
        ></Image>

        <h1 className="text-tangaroa-950 mt-3 text-3xl text-center w-full ">
          Instituto Axioma
        </h1>

        <div className="flex flex-col mt-6  w-70   items-center ">
          <TextBox
            className="w-26 border-l-tangaroa-950 "
            label="Correo Electronico*"
            type="email"
            value={Correo}
            onChange={(e) => setCorreo(e.target.value)}
          ></TextBox>
          <TextBox
            className="w-26 mt-5 "
            label="Contraseña*"
            type="Password"
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
          ></TextBox>
          <Button className="!mt-9 mb-1" label="Iniciar sesión"></Button>
        </div>
      </div>
    </div>
  );
}
