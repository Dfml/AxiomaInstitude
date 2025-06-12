"use client";
import { useState, useEffect } from "react";
import Button from "@/app/components/Button";

export interface CourseData {
  courseName: string;
}

interface CourseFormEditProps {
  data?: CourseData;
  type: string;
  onChange?: (updated: CourseData) => void;
}

export default function CourseFormEdit({
  data,
  type,
  onChange,
}: CourseFormEditProps) {
  const [formData, setFormData] = useState<CourseData>({
    courseName: "",
  });
  const [label, setLabel] = useState("");

  useEffect(() => {
    switch (type) {
      case "new":
        setLabel("Crear");
        break;
      case "edit":
        if (data != null) {
          setFormData(data);
        }
        setLabel("Actualizar");
        break;
      case "Delete":
        if (data != null) {
          setFormData(data);
        }
        setLabel("Eliminar");
        break;
    }
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    onChange?.({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className=" flex  gap-x-10 gap-y-6 text-[#0C2340] text-sm ">
      {/* Primera lista: 3 primeros campos */}
      <div className=" grid grid-cols-2 w-full gap-x-4 gap-y-4">
        <div className="flex flex-col w-88 col-span-2 mx-auto  ">
          <label htmlFor="courseName" className="mb-1 font-semibold">
            Nombre curso*
          </label>
          <input
            type="text"
            id="courseName"
            name="courseName"
            disabled={type == "Delete"}
            value={formData.courseName}
            onChange={handleChange}
            readOnly
            className="border border-[#0C2340] rounded-md px-3 py-2 placeholder:text-[#0C2340] placeholder:italic bg-[#F0F4F8]"
          />
        </div>
        <div className=" flex col-span-2 justify-center items-center">
          <Button
            label={label}
            className="bg-[#B15B29] h-15  text-2xl text-white font-semibold hover:bg-[#944a20] transition-colors !mt-5"
          />
        </div>
      </div>
    </div>
  );
}
