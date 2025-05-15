'use client'
import { Pencil, Trash2, Copy } from "lucide-react";

type RowData = {
  [key: string]: string | number;
};

interface GroupTableProps {
  headers: string[];
  rows: RowData[];
}

export default function GroupTable({ headers, rows }: GroupTableProps) {
  return (
    <div className="mt-10 rounded-lg">
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-tangaroa-950">
          <thead>
            <tr>
              {headers.map((header) => (
                <th key={header} className="border bg-[rgba(229,229,229,1)] text-blue-950 border-tangaroa-950 px-2 py-2">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={index} className="text-center text-tangaroa-950 hover:bg-blue-50">
                {headers.map((header, i) => (
                  <td key={i} className="border border-tangaroa-950 px-2 py-1">
                    {header === "Acciones" ? (
                      <div className="flex justify-center gap-2">
                        <button>
                          <Pencil size={16} className="text-tangaroa-950 transition-all hover:text-putty-600" />
                        </button>
                        <button>
                          <Trash2 size={16} className="text-tangaroa-950 transition-all hover:text-putty-600" />
                        </button>
                        <button>
                          <Copy size={16} className="text-tangaroa-950 transition-all hover:text-putty-600" />
                        </button>
                      </div>
                    ) : (
                      row[header] ?? "-"
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}