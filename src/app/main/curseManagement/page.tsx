"use client";

import Cards from "@/app/components/Cards";

export const cardItems = [
  {
    label: "Grupos",
    gruposActivos: "groups",
    maestroLibre:  "groups",
    designacion:  "groups",
    cantidadEstudiantes:  "groups",
  },
  {
    label: "Grupos",
    gruposActivos: "groups",
    maestroLibre:  "groups",
    designacion:  "groups",
    cantidadEstudiantes:  "groups",
  }
];

export default function Home() {
  return (
    <div className="">
        {cardItems.map((card, index) => (
          <Cards key={index} {...card} />
        ))}
    </div>
  );
}
