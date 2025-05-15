"use client";
import SearchBar from "@/app/components/SearchBar";
import GroupTable from "@/app/components/Table";
import ReloadButton from "@/app/components/ReloadButton";
import PlusButton from "@/app/components/PlusButton";
export default function Home() {


const headers = [
  "Id Alumno",
  "Nombres",
  "Apelidos",
  "Correo",
  "Telefono",
  "Valoracion Escolar",
  "Valoracion Biblica ",
  "Estado",
  "Acciones",
]
const rows = [
  {
    "Id Alumno": 1,
    "Nombres": "Dante",
    "Apelidos": "Ramírez",
    "Correo": "dante.ramirez@email.com",
    "Telefono": "+52 123 456 7890",
    "Valoracion Escolar": "Excelente",
    "Valoracion Biblica ": "Alta",
    "Estado": "Activo",
  },
  {
    "Id Alumno": 2,
    "Nombres": "Isabela",
    "Apelidos": "Gómez",
    "Correo": "isabela.gomez@email.com",
    "Telefono": "+52 098 765 4321",
    "Valoracion Escolar": "Buena",
    "Valoracion Biblica ": "Media",
    "Estado": "Activo",
  },
  {
    "Id Alumno": 3,
    "Nombres": "Miguel",
    "Apelidos": "Santos",
    "Correo": "miguel.santos@email.com",
    "Telefono": "+52 555 123 4567",
    "Valoracion Escolar": "Regular",
    "Valoracion Biblica ": "Baja",
    "Estado": "Inactivo",
  }
];

  return (
    <>
      <div className="w-full flex h-fit justify-between ">
        <SearchBar className="" placeholder="Buscar Alumno"></SearchBar>
        <div className="flex gap-x-2 items-center ">
          <p className=" text-tangaroa-950 font-bold  ">Nuevo Alumno</p>
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
