import React, { useState, useEffect, FormEvent } from 'react'
import { io, Socket } from 'socket.io-client'

const ChatApp: React.FC = () => {
  const [input, setInput] = useState<string>('');
  const [messages, setMessages] = useState<string[]>([]);
  const [socket, setSocket] = useState<Socket | null>(null);

  useEffect(() => {
    const newSocket = io();
    setSocket(newSocket);
    newSocket.on('chat message', (msg: string) => {
      setMessages(messages => [...messages, msg]);
    });

    return () => {
      newSocket.close();
    };
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (input && socket) {
      socket.emit('chat message', input);
      setInput('');
    }
  };

  return (
    <div>
      <ul id="messages">
        {messages.map((msg, index) => (
          <li key={index}>{msg}</li>
        ))}
      </ul>
      <form id="form" onSubmit={handleSubmit}>
        <input id="input" autoComplete="off" value={input} onChange={(e) => setInput(e.target.value)} />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ChatApp;