import { snippets } from "@/modules/data";
import React, { Dispatch, SetStateAction } from "react";

const Snippets = ({
  setUserInput,
}: {
  setUserInput: Dispatch<SetStateAction<string>>;
}) => {
  return (
    <div className="mt-2 w-full">
      <div className="flex overflow-x-auto gap-3 text-white ">
        {snippets.map((snippet) => (
          <div
            key={snippet.value}
            className="bg-primary rounded-lg p-2 cursor-pointer hover:bg-gray-700 min-w-[125px] text-center"
            onClick={() => setUserInput(snippet.value)}>
            {snippet.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Snippets;
