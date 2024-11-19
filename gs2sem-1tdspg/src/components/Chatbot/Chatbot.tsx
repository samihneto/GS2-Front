"use client";

import React, { useState } from "react";

export default function Chatbot() {
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>([]);
  const [input, setInput] = useState("");

  const handleSend = async () => {
    if (!input.trim()) return;

    // Adiciona a mensagem do usuário
    const newMessages = [...messages, { sender: "user", text: input }];
    setMessages(newMessages);

    // Simula uma resposta do chatbot
    const botResponse = await fetchBotResponse(input);
    setMessages((prev) => [...prev, { sender: "bot", text: botResponse }]);

    setInput("");
  };

  const fetchBotResponse = async (message: string): Promise<string> => {
    // Lógica de resposta simples
    if (message.toLowerCase().includes("olá")) {
      return "Olá! Como posso ajudar você hoje?";
    } else if (message.toLowerCase().includes("ajuda")) {
      return "Claro! Me diga como posso ajudar.";
    }
    return "Desculpe, ainda estou aprendendo e não entendi sua mensagem.";
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 bg-gray-100 rounded-lg shadow">
      <div className="h-64 overflow-y-scroll bg-white p-4 rounded-lg border border-gray-300">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`mb-4 ${
              msg.sender === "user" ? "text-right" : "text-left"
            }`}
          >
            <div
              className={`inline-block px-4 py-2 rounded-lg ${
                msg.sender === "user"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-300 text-black"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 flex items-center">
        <input
          type="text"
          className="flex-1 border border-gray-300 rounded-lg p-2 mr-2"
          placeholder="Digite sua mensagem..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          onClick={handleSend}
        >
          Enviar
        </button>
      </div>
    </div>
  );
}