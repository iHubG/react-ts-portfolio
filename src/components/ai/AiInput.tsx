import { useRef, useState } from "react";
import { Send } from "lucide-react";
import { type AiInputProps } from "@/types";

function AiInput({ onSend, loading }: AiInputProps) {
  const [text, setText] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const handleSubmit = () => {
    if (text.trim()) {
      onSend(text);
      setText("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div className="p-3 border-t border-gray-100 bg-gray-50/50 rounded-b-2xl">
      <div className="flex items-center space-x-2">
        {/* Textarea */}
        <div className="flex-1 relative">
          <textarea
            ref={textareaRef}
            rows={1}
            placeholder="Ask about Ian's projects..."
            className="flex items-center w-full p-2 pr-10 border border-gray-200 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent bg-white shadow-sm transition-all duration-200 min-h-[36px] max-h-24 text-xs overflow-hidden"
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyPress={handleKeyPress}
            style={{
              height: `${Math.min(
                Math.max(36, textareaRef.current?.scrollHeight || 36),
                96
              )}px`,
            }}
          />
        </div>

        {/* Send Button */}
        <button
          onClick={handleSubmit}
          disabled={loading || !text.trim()}
          className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 disabled:from-gray-300 disabled:to-gray-400 text-white p-2 rounded-lg transition-all duration-200 hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed shadow-md hover:shadow-lg cursor-pointer flex items-center justify-center"
          aria-label="Send message"
        >
          <Send className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

export default AiInput;
