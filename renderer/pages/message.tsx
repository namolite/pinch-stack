import React, { useState, useEffect, FormEvent } from 'react'
import { io, Socket } from 'socket.io-client'

const Message: React.FC = () => {
  const [input, setInput] = useState<string>('');
  const [messages, setMessages] = useState<string[]>([]);
  const [socket, setSocket] = useState<Socket | null>(null);

  useEffect(() => {
    const host: string = 'http://192.168.43.151:23333/chat'

    const newSocket = io('http://localhost:23333');
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
    <div className='w-full'>
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
}

export default Message
