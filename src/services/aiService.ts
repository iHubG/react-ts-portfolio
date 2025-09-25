import { model } from "@/config/firebase";
import { buildContextualPrompt } from "./promptBuilder";
import { type ChatMessage } from "@/types"; 

export async function generateAIResponse(prompt: string): Promise<ChatMessage> {
  try {
    const contextualPrompt = buildContextualPrompt(prompt);
    const result = await model.generateContent(contextualPrompt);

    return {
      type: "ai",
      content: result.response.text(),
      timestamp: Date.now(),
    };
  } catch (error) {
    let message = "Error generating AI content";

    if (error instanceof Error) {
      message = error.message;
    }

    return {
      type: "error",
      content: message,
      timestamp: Date.now(),
    };
  }
}
