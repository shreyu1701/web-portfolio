import React, { useState } from "react";
import axios from "axios";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !isLoading) {
      e.preventDefault();
      sendMessage();
    }
  };

  const sendMessage = async () => {
    if (input.trim() === "") return;
    if (!process.env.REACT_APP_API_BASE_URL) {
      console.error("API URL not configured");
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: "bot", text: "Sorry, the API is not configured properly." },
      ]);
      return;
    }

    const userMessage = { sender: "user", text: input };
    setMessages([...messages, userMessage]);
    setIsLoading(true);

    try {
      console.log("Sending message:", input); // Debugging line
      const response = await axios.post(
        `${process.env.REACT_APP_API_BASE_URL}/api/chat`,
        { message: input }
      );
      console.log("Response:", response); // Debugging line

      if (response.data && response.data.response) {
        const botMessage = { sender: "bot", text: response.data.response };
        setMessages((prevMessages) => [...prevMessages, botMessage]);
      } else {
        console.error("Unexpected response format:", response.data);
        const errorMessage = {
          sender: "bot",
          text: "Sorry, something went wrong.",
        };
        setMessages((prevMessages) => [...prevMessages, errorMessage]);
      }
    } catch (error) {
      console.error("Error sending message:", error);
      const errorMessage = {
        sender: "bot",
        text: "Sorry, I couldn't process your request.",
      };
      setMessages((prevMessages) => [...prevMessages, errorMessage]);
    } finally {
      setIsLoading(false);
    }

    setInput("");
  };

  const toggleChat = () => {
    setIsChatOpen((prev) => !prev);
  };

  return (
    <div>
      {/* Floating Icon */}
      <div
        className="fixed bottom-4 right-4 bg-orange-500 text-white p-3 rounded-full shadow-lg cursor-pointer hover:bg-orange-400 transition-all duration-300 sm:bottom-6 sm:right-6 z-50"
        onClick={toggleChat}
      >
        {isChatOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3v18m9-9H3"
            />
          </svg>
        )}
      </div>

      {/* Chatbot */}
      {isChatOpen && (
        <div className="fixed bottom-20 right-4 bg-white border rounded shadow-lg w-72 sm:w-96 p-4 sm:bottom-24 sm:right-6 lg:right-8 lg:bottom-28 z-40">
          <div className="border rounded p-4 h-60 sm:h-72 overflow-y-auto bg-gray-50">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-2 my-1 rounded ${
                  msg.sender === "user"
                    ? "bg-orange-300 text-black self-start"
                    : "bg-orange-100 text-orange-900 self-start"
                }`}
              >
                {msg.text}
              </div>
            ))}
            {isLoading && <div className="text-gray-500">Loading...</div>}
          </div>
          <div className="flex mt-4">
            <input
              type="text"
              className="border p-2 rounded flex-grow text-sm sm:text-base"
              placeholder="Type a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              disabled={isLoading}
            />
            <button
              className="bg-orange-500 text-white px-4 py-2 rounded ml-2 text-sm sm:text-base"
              onClick={sendMessage}
              disabled={isLoading}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
