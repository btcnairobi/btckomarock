import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, StopCircle } from 'lucide-react';
import { generateVisionStrategy } from '../services/geminiService';
import ReactMarkdown from 'react-markdown';

const MessageBubble: React.FC<{ text: string; isAi: boolean }> = ({ text, isAi }) => (
  <div className={`flex gap-3 mb-6 ${isAi ? 'flex-row' : 'flex-row-reverse'}`}>
    <div className={`w-10 h-10 rounded-full border-2 border-stone-900 flex items-center justify-center flex-shrink-0 ${isAi ? 'bg-white text-bitcoin-orange' : 'bg-stone-900 text-white'}`}>
        {isAi ? <Bot size={20} /> : <User size={20} />}
    </div>
    <div className={`max-w-[85%] rounded-xl p-4 border-2 border-stone-900 shadow-rock-sm ${
        isAi 
        ? 'bg-white text-stone-900' 
        : 'bg-bitcoin-orange text-white'
    }`}>
        {isAi ? (
            <div className="prose prose-sm font-medium">
                <ReactMarkdown>{text}</ReactMarkdown>
            </div>
        ) : (
            <span className="font-bold">{text}</span>
        )}
    </div>
  </div>
);

const VisionPage: React.FC = () => {
  const [topic, setTopic] = useState('');
  const [messages, setMessages] = useState<{text: string, isAi: boolean}[]>([
      { text: "Habari! I am the Oracle. Ask me how to build the community.", isAi: true }
  ]);
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleGenerate = async () => {
    if (!topic.trim()) return;
    
    const userMsg = topic;
    setTopic('');
    setMessages(prev => [...prev, { text: userMsg, isAi: false }]);
    setLoading(true);

    const result = await generateVisionStrategy(userMsg);
    setMessages(prev => [...prev, { text: result, isAi: true }]);
    setLoading(false);
  };

  const suggestions = ["Jobs", "Fees", "Roads"];

  return (
    <div className="flex flex-col h-[calc(100vh-160px)] md:h-[calc(100vh-100px)]">
      
      <div className="mb-4">
            <h1 className="text-4xl font-black uppercase">Oracle</h1>
      </div>

      <div className="flex-grow overflow-y-auto custom-scrollbar rounded-2xl bg-stone-100 border-2 border-stone-900 p-4 mb-4">
        {messages.map((m, i) => (
            <MessageBubble key={i} text={m.text} isAi={m.isAi} />
        ))}
        {loading && (
             <div className="flex gap-2 p-2">
                 <div className="w-2 h-2 bg-stone-900 rounded-full animate-bounce"></div>
                 <div className="w-2 h-2 bg-stone-900 rounded-full animate-bounce delay-75"></div>
                 <div className="w-2 h-2 bg-stone-900 rounded-full animate-bounce delay-150"></div>
             </div>
        )}
        <div ref={bottomRef} />
      </div>

      <div className="flex flex-col gap-3">
        {messages.length === 1 && (
            <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar">
                {suggestions.map(s => (
                    <button 
                        key={s} 
                        onClick={() => setTopic(s)}
                        className="bg-white border-2 border-stone-900 text-stone-900 px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap hover:bg-stone-100 shadow-rock-sm active:translate-y-0.5 active:shadow-none transition-all"
                    >
                        {s}
                    </button>
                ))}
            </div>
        )}
        <div className="relative">
            <input
                type="text"
                className="w-full bg-white border-2 border-stone-900 rounded-xl pl-4 pr-14 py-4 text-stone-900 font-bold focus:outline-none focus:ring-4 focus:ring-stone-200"
                placeholder="Ask..."
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleGenerate()}
                disabled={loading}
            />
            <button 
                onClick={handleGenerate}
                disabled={!topic.trim() || loading}
                className="absolute right-2 top-2 bottom-2 aspect-square bg-bitcoin-orange border-2 border-stone-900 text-white rounded-lg flex items-center justify-center shadow-rock-sm active:translate-y-0.5 active:shadow-none transition-all disabled:opacity-50"
            >
                {loading ? <StopCircle size={20} /> : <Send size={20} />}
            </button>
        </div>
      </div>
    </div>
  );
};

export default VisionPage;