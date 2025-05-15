"use client";
import SearchBar from "@/app/components/SearchBar";
import GroupTable from "@/app/components/Table";
import ReloadButton from "@/app/components/ReloadButton";
import PlusButton from "@/app/components/PlusButton";
export default function Home() {


const headers = [
  "Id Maestro",
  "Nombres",
  "Apelidos",
  "Correo",
  "Telefono",
  "curso dictado",
  "grupo asignado", 
  "Acciones",
]
const rows = [
  {
    "Id Maestro": 101,
    "Nombres": "Laura",
    "Apelidos": "Hernández",
    "Correo": "laura.hernandez@colegio.edu",
    "Telefono": "+52 555 123 4567",
    "curso dictado": "Matemáticas",
    "grupo asignado": "Grupo A",
  },
  {
    "Id Maestro": 102,
    "Nombres": "Carlos",
    "Apelidos": "Ramírez",
    "Correo": "carlos.ramirez@colegio.edu",
    "Telefono": "+52 555 987 6543",
    "curso dictado": "Ciencias",
    "grupo asignado": "Grupo B",
  },
  {
    "Id Maestro": 103,
    "Nombres": "Ana",
    "Apelidos": "López",
    "Correo": "ana.lopez@colegio.edu",
    "Telefono": "+52 555 222 3344",
    "curso dictado": "Historia",
    "grupo asignado": "Grupo C",
  },
  {
    "Id Maestro": 104,
    "Nombres": "Jorge",
    "Apelidos": "Martínez",
    "Correo": "jorge.martinez@colegio.edu",
    "Telefono": "+52 555 888 1122",
    "curso dictado": "Biblia",
    "grupo asignado": "Grupo D",
  }
];

  return (
    <>
      <div className="w-full flex h-fit justify-between ">
        <SearchBar className="" placeholder="Buscar Maestro"></SearchBar>
        <div className="flex gap-x-2 items-center ">
          <p className=" text-tangaroa-950 font-bold  ">Nuevo Maestro</p>
          <PlusButton className=" "></PlusButton>

          <ReloadButton className=" "  ></ReloadButton>



        </div>
      </div>
      <div>
         <GroupTable headers={headers} rows={rows} ></GroupTable>
      </div>
    </>
  );
}
