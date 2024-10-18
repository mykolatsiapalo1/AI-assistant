import { CommitsResponse } from "@/lib/types";
import React from "react";

const Commit = ({ message }: { message: CommitsResponse }) => {
  return (
    <ul className="list-disc ml-5 text-green-600">
      {message.data.map(
        (commit: { message: string; date: string }, index: number) => (
          <li key={index}>
            <span className="font-bold">{commit.message}</span> - {commit.date}
          </li>
        )
      )}
    </ul>
  );
};

export default Commit;
