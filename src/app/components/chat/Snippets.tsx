import { snippets } from "@/app/modules/data";
import React, { Dispatch, SetStateAction } from "react";

const Snippets = ({
  setUserInput,
  inputRef,
}: {
  setUserInput: Dispatch<SetStateAction<string>>;
  inputRef: React.RefObject<HTMLInputElement>;
}) => {
  return (
    <div className="mt-2 w-full">
      <div className="flex overflow-x-auto gap-3 text-white">
        {snippets.map((snippet) => (
          <div
            key={snippet.value}
            className="bg-primary rounded-lg p-2 cursor-pointer hover:bg-gray-700 min-w-[125px] text-center"
            onClick={() => {
              console.log(inputRef);
              setUserInput(snippet.value);
              if (inputRef.current) {
                inputRef.current.focus();
              }
            }}>
            {snippet.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Snippets;
