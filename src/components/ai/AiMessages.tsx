import { Bot, User } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { type AiMessagesProps } from "@/types";

function AiMessages({ messages, loading }: AiMessagesProps) {
  return (
    <div className="flex-1 overflow-y-auto p-3 space-y-3">
      {messages.length === 0 && (
        <div className="text-center text-gray-500 mt-6">
          <Bot className="h-10 w-10 mx-auto mb-2 text-gray-300" />
          <p className="text-sm font-medium">Hi! I'm IanAI</p>
          <p className="text-xs text-gray-400 mt-1">
            Ask me about Ian&apos;s projects, skills, or experience!
          </p>
        </div>
      )}

      {messages.map((msg, idx) => (
        <div
          key={idx}
          className={`flex ${
            msg.type === "user" ? "justify-end" : "justify-start"
          } animate-in fade-in slide-in-from-bottom-2 duration-300`}
        >
          <div
            className={`flex items-start space-x-2 max-w-[90%] ${
              msg.type === "user" ? "flex-row-reverse space-x-reverse" : ""
            }`}
          >
            {/* Avatar */}
            <div
              className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                msg.type === "user"
                  ? "bg-gradient-to-r from-blue-500 to-blue-600"
                  : msg.type === "error"
                  ? "bg-red-100"
                  : "bg-gradient-to-r from-violet-100 to-indigo-100"
              }`}
            >
              {msg.type === "user" ? (
                <User className="h-3 w-3 text-white" />
              ) : (
                <Bot
                  className={`h-3 w-3 ${
                    msg.type === "error" ? "text-red-500" : "text-violet-600"
                  }`}
                />
              )}
            </div>

            {/* Message Bubble */}
            <div
              className={`px-3 py-2 rounded-xl text-sm ${
                msg.type === "user"
                  ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-br-sm"
                  : msg.type === "error"
                  ? "bg-red-50 text-red-700 border border-red-100 rounded-bl-sm"
                  : "bg-gray-50 text-gray-800 rounded-bl-sm"
              }`}
            >
              <div className="prose prose-sm max-w-[calc(100vw-100px)] break-words whitespace-pre-wrap text-xs">
                <ReactMarkdown>{msg.content}</ReactMarkdown>
              </div>

              <p
                className={`text-xs mt-1 ${
                  msg.type === "user" ? "text-blue-100" : "text-gray-400"
                }`}
              >
                {new Date(msg.timestamp).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </p>
            </div>
          </div>
        </div>
      ))}

      {/* Loading indicator */}
      {loading && (
        <div className="flex justify-start animate-in fade-in duration-300">
          <div className="flex items-start space-x-2 max-w-[90%]">
            <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 bg-gradient-to-r from-violet-100 to-indigo-100">
              <Bot className="h-3 w-3 text-violet-600" />
            </div>
            <div className="bg-gray-50 text-gray-800 px-3 py-2 rounded-xl rounded-bl-sm">
              <div className="flex space-x-1">
                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></div>
                <div
                  className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"
                  style={{ animationDelay: "0.1s" }}
                ></div>
                <div
                  className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"
                  style={{ animationDelay: "0.2s" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AiMessages;
