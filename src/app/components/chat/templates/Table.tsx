import { TableResponse } from "@/lib/types";
import React from "react";

const Table = ({ message }: { message: TableResponse }) => {
  return (
    <table className="min-w-full table-auto text-primary">
      <thead>
        <tr>
          {Object.keys(message.data[0]).map((key) => (
            <th key={key} className="px-4 py-2 text-left font-bold">
              {key}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {message.data.map(
          (row: { name: string; age: number }, index: number) => (
            <tr key={index} className="hover:bg-gray-100">
              {Object.values(row).map((val, idx) => (
                <td key={idx} className="border px-4 py-2">
                  {`${val}`}
                </td>
              ))}
            </tr>
          )
        )}
      </tbody>
    </table>
  );
};

export default Table;
