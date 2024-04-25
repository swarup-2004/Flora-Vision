import React, { useState, useEffect } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { IconRobotFace, IconUser } from "@tabler/icons-react";
import "./Chatbot.css";

function Chatbot() {
  const [chate, updateChat] = useState([
    {
      person: "bot",
      text: "Hello there. My name is Allium, and I'm a virtual assistant designed to answer your questions about medicinal plants. How can I help you today?",
    },
  ]);
  const [curmsg, updateCurmsg] = useState("");
  const [loading, setLoading] = useState(false);

  const genAI = new GoogleGenerativeAI("");

  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const chat = model.startChat({
    history: [
      {
        role: "user",
        parts: [
          {
            text: "You are a gardener helper system which specializes answering medicinal plant questions. Try to give short 3-5 sentence answers only. ",
          },
        ],
      },
      {
        role: "model",
        parts: [
          {
            text: "Great to meet you. What would you like to know about medicinal plants?",
          },
        ],
      },
    ],
    generationConfig: {
      maxOutputTokens: 10000,
    },
  });

  const submitChat = (e) => {
    e.preventDefault();
    const userChat = { person: "user", text: curmsg };
    updateChat((x) => [...x, userChat]);
    const generateContent = async () => {
      const msg = curmsg;
      updateCurmsg("");
      setLoading(true);
      const result = await chat.sendMessage(msg);
      const response = await result.response;
      const text = await response.text(); // Add await here
      console.log(text);
      const botChat = { person: "bot", text: text };
      updateChat((x) => [...x, botChat]);
      setLoading(false);
      console.log(chate);
    };

    generateContent();
  };

  const updateInput = (e) => {
    updateCurmsg(e.target.value);
  };

  return (
    <>
      <h1 className="chatbot-title">Chatbot</h1>
      <div className="chatbot">
        <div className="chatbot-convo">
          {chate.map((msg, index) => {
            return msg.person === "user" ? (
              <div className="chatbot-convo-line chatbot-left">
                <p className="chatbot-convo-msg-l">{msg.text}</p>
                <IconUser color="black" />
              </div>
            ) : (
              <div className="chatbot-convo-line chatbot-right">
                <IconRobotFace color="black" />
                <p className="chatbot-convo-msg-r">{msg.text}</p>
              </div>
            );
          })}
        </div>
        <div className="chatbot-form pt-8">
          <form onSubmit={submitChat}>
            <input
              type="text"
              value={curmsg}
              onChange={updateInput}
              className="chatbot-input"
            />
            <button
              onClick={submitChat}
              disabled={loading === true}
              className="chatbot-submit"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Chatbot;
