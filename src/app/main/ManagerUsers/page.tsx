'use client';

import Cards from "@/app/components/Cards"
import CardPlusButton from "@/app/components/CardPlusButton"; // Si tienes este componente

const dataCart = [
  {
    usuario: "Usuario",
    nombre: "Lorem",
    contrasena: "contraseña",
  },
   {
    usuario: "Usuario",
    nombre: "Lorem",
    contrasena: "lorem",
  }
  
];



export default function Page() {
  return (
    <div className="p-10 flex flex-wrap gap-6">
      {dataCart.map((item, index) => (
        <Cards
          
          key={index}
          label={item.usuario}
          data={[
            { label: "Nombre", value: item.nombre },
            { label: "Contraseña", value: item.contrasena, isPassword: true },
          ]}
        />
      ))}
      <CardPlusButton ></CardPlusButton>
    </div>
  );
}
