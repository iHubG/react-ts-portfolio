import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Bot } from "lucide-react";
import { generateAIResponse } from "@/services/aiService";
import { type ChatMessage } from "@/types";
import AiMessages from "./AiMessages";
import AiInput from "./AiInput";

function AiChat() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const toggleOpen = () => setOpen((o) => !o);

  const handleSend = async (prompt: string) => {
    if (!prompt.trim() || loading) return;

    const userMessage: ChatMessage = {
      type: "user",
      content: prompt,
      timestamp: Date.now(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setLoading(true);

    const aiMessage = await generateAIResponse(prompt);
    setMessages((prev) => [...prev, aiMessage]);
    setLoading(false);
  };

  const clearChat = () => setMessages([]);

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={toggleOpen}
        className="fixed bottom-20 md:bottom-20 xl:bottom-20 right-8 z-50 group bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white px-3 py-2 rounded-full shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center space-x-2 cursor-pointer"
        aria-label="Chat with IanAI"
      >
        <MessageCircle className="h-3 w-3 transition-transform group-hover:scale-105" />
        <span className="text-xs font-medium">Chat with IanAI</span>
        <div className="absolute -top-1 -right-2 md:-right-3 md:-right-auto w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
      </button>

      {/* Chat Panel */}
      {open && (
        <div className="fixed bottom-33 md:bottom-32 right-6 z-50 w-80 md:w-85 lg:w-90 bg-white/95 rounded-2xl shadow-2xl flex flex-col h-96">
          {/* Header */}
          <div className="flex items-center justify-between p-3 border-b border-gray-100 bg-gradient-to-r from-violet-50 to-indigo-50 rounded-t-2xl">
            <div className="flex items-center space-x-2">
              <div className="w-7 h-7 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-full flex items-center justify-center">
                <Bot className="h-4 w-4 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 text-sm">IanAI</h3>
                <p className="text-xs text-gray-500">Ask me about Ian's work</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              {messages.length > 0 && (
                <button
                  onClick={clearChat}
                  className="text-xs text-gray-500 hover:text-gray-700"
                >
                  Clear
                </button>
              )}
              <button
                onClick={toggleOpen}
                className="text-gray-400 hover:text-gray-600 cursor-pointer"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Messages */}
          <AiMessages messages={messages} loading={loading} />
          <div ref={messagesEndRef} />

          {/* Input */}
          <AiInput onSend={handleSend} loading={loading} />
        </div>
      )}
    </>
  );
}

export default AiChat;
