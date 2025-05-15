
"use client";

import { Plus} from "lucide-react";
import Cards from "@/app/components/Cards";
import CardPlusButton from "@/app/components/CardPlusButton"


const dataCart = [
  {
    curso: "Matemáticas",
    gruposActivos: "00000",
    maestrosLibres: "0000",
    designacion: "LXLXLXL",
    cantidadEstudiantes: "0000",
  },
  {
    curso: "Biblia",
    gruposActivos: "00001",
    maestrosLibres: "0003",
    designacion: "MXMXMXM",
    cantidadEstudiantes: "0012",
  }
];






export default function Home() {
  return (
      <div className="p-10 flex flex-wrap gap-6">
      {dataCart.map((item, index) => (
        <Cards className="h-80 "
          key={index}
          label={`${item.curso}`}
          data={[
            { label: "Grupos Activos", value: item.gruposActivos },
            { label: "Maestros Libres", value: item.maestrosLibres },
            { label: "Designación", value: item.designacion },
            { label: "Estudiantes inscritos", value: item.cantidadEstudiantes },
          ]}
        />
      ))}

      <CardPlusButton ></CardPlusButton>
    </div>
  );
}
