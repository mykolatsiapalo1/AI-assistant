import React, { Dispatch, SetStateAction, forwardRef } from "react";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import MicIcon from "@mui/icons-material/Mic";
import SendIcon from "@mui/icons-material/Send";
import { IconButton } from "@mui/material";

interface ChatInputProps {
  userInput: string;
  setUserInput: Dispatch<SetStateAction<string>>;
  handleUserInput: () => void;
}

const ChatInput = forwardRef<HTMLInputElement, ChatInputProps>(
  ({ userInput, setUserInput, handleUserInput }, ref) => {
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter" && userInput.trim()) {
        handleUserInput();
      }
    };

    return (
      <div className="flex items-center border border-gray-300 rounded-2xl px-4 p-2 text-primary">
        <IconButton>
          <PersonAddAltIcon />
        </IconButton>
        <div className="border-l border-gray-300 h-8 mx-2" />
        <input
          ref={ref}
          onKeyDown={handleKeyDown}
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          className="flex-grow p-2 text-primary placeholder-gray-500 outline-none"
          placeholder="Message AI assistant"
        />
        <IconButton>
          <MicIcon className="text-gray-600 " />
        </IconButton>
        <IconButton
          disabled={!userInput}
          onClick={handleUserInput}
          className="rounded-full p-2 ml-2 flex items-center justify-center">
          <SendIcon fontSize="small" />
        </IconButton>
      </div>
    );
  }
);

export default ChatInput;
