"use client";

import ChatInput from "@/components/chat/ChatInput";
import Snippets from "@/components/chat/Snippets";
import React, { useState } from "react";
import { mockResponses } from "./data";
import { getCurrentTime } from "@/lib/utils";
import Graph from "@/components/chat/templates/Graph";
import Table from "@/components/chat/templates/Table";
import Commit from "@/components/chat/templates/Commit";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import { ResponseType } from "@/lib/types";

const Chat = () => {
  const [messages, setMessages] = useState<
    { content: string | ResponseType; time: string; sender: string }[]
  >([]);
  const [userInput, setUserInput] = useState<string>("");

  const handleUserInput = () => {
    const userMessage = userInput;
    const response = mockResponses[userMessage.toLowerCase()] || {
      type: "text",
      data: "Sorry, I don't understand that command.",
    };

    setMessages((prevMessages) => [
      ...prevMessages,
      { sender: "user", content: userMessage, time: getCurrentTime() },
      { sender: "bot", content: response, time: getCurrentTime() },
    ]);

    setUserInput("");
  };

  const renderMessageContent = (message: ResponseType) => {
    switch (message.type) {
      case "graph":
        return <Graph data={message.data} labels={message.labels} />;
      case "table":
        return <Table message={message} />;
      case "code":
        return (
          <pre className="bg-gray-300 p-4 rounded text-primary w-fit">
            {message.data}
          </pre>
        );
      case "commits":
        return <Commit message={message} />;
      case "text":
        return <p className="text-primary">{message.data}</p>;
    }
  };

  return (
    <>
      <div className="w-full px-4 h-full py-10">
        <h2 className="text-2xl font-bold mb-4 text-primary ">AI Assistant</h2>
        <div className="h-4/5 overflow-y-auto  p-2 mb-2 ">
          {messages.length > 0 ? (
            messages.map((message, index) => (
              <div
                key={index}
                className={`mb-4 flex ${
                  message.sender === "user" ? "justify-end" : "justify-start"
                }`}>
                {message.sender === "user" ? (
                  <>
                    <div className="flex flex-col items-end bg-secondary text-white rounded-tl-lg rounded-br-lg rounded-bl-lg px-3 py-2">
                      <span className="">{message.content as string}</span>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex items-start w-fit ">
                      <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center mr-2">
                        <SmartToyIcon />
                      </div>
                      <div className="flex flex-col w-full">
                        <span className="font-bold text-primary">
                          AI assistant
                        </span>
                        <span className="text-xs text-gray-500">
                          {message.time}
                        </span>
                        <div className="mt-1 bg-[#f4f8f7] w-full p-4 rounded-lg">
                          {renderMessageContent(
                            message.content as ResponseType
                          )}
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))
          ) : (
            <div className="text-center text-primary h-full  w-full justify-center items-center flex font-bold text-2xl ">
              How can I assist you today?
            </div>
          )}
        </div>

        <ChatInput
          userInput={userInput}
          setUserInput={setUserInput}
          handleUserInput={handleUserInput}
        />
        <Snippets setUserInput={setUserInput} />
      </div>
    </>
  );
};

export default Chat;
