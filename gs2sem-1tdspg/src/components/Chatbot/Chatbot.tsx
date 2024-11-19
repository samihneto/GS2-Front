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
    // Normaliza a mensagem do usuário para facilitar a comparação
    const normalizedMessage = message.toLowerCase().trim();
  
    // Respostas simples com palavras-chave
    if (normalizedMessage.includes("olá")) {
      return "Olá! Como posso ajudar você hoje?";
    } else if (normalizedMessage.includes("ajuda")) {
      return "Claro! Me diga como posso ajudar.";
    } else if (normalizedMessage.includes("comprar")) {
      return "Se você está buscando comprar um de nossos geradores, recomendo que dê uma olhada em nosso catálogo!";
    } else if (normalizedMessage.includes("alugar")) {
      return "Escolha uma das quatro opções: (a) Viagem; (b) Evento; (c) Residência; (d) Emergência";
    }
  
    // Respostas específicas para cada alternativa
    switch (normalizedMessage) {
      case "a":
      case "viagem":
        return "Para viagens, recomendamos nossos geradores portáteis, fáceis de transportar e de alta eficiência energética!";
      case "b":
      case "evento":
        return "Para eventos, sugerimos os geradores de médio porte, ideais para iluminação e equipamentos de som.";
      case "c":
      case "residência":
        return "Para residências, oferecemos geradores solares que garantem energia sustentável e confiável.";
      case "d":
      case "emergência":
        return "Para emergências, nossos geradores de resposta rápida são perfeitos para evitar interrupções.";
    }
  
    // Resposta genérica para mensagens não reconhecidas
    return "Desculpe, ainda estou aprendendo e não entendi sua mensagem. Tente reformular!";
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 bg-white rounded-lg shadow-xl">
      <div className="h-96 overflow-y-scroll bg-white p-4 rounded-lg border border-gray-300">
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
                  ? "bg-verdeMedio text-white"
                  : "bg-laranjaMedio text-white"
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
          className="bg-laranjaEscuro text-white px-4 py-2 rounded-lg hover:bg-laranjaMedio"
          onClick={handleSend}
        >
          Enviar
        </button>
      </div>
    </div>
  );
}