import { useState } from "react";
import { askResume } from "../api/resumeApi";

export const useChat = () => {
  const [chatHistory, setChatHistory] = useState([]);
  const [loading, setLoading] = useState(false);

  const sendMessage = async (text) => {
    if (!text.trim() || loading) return;

    setChatHistory(prev => [...prev, { type: "user", text }]);
    setLoading(true);

    try {
      const answer = await askResume(text);
      setChatHistory(prev => [...prev, { type: "bot", text: answer }]);
    } catch {
      setChatHistory(prev => [
        ...prev,
        { type: "bot", text: "Backend is spinning up — this may take 2 mins on the first load. Please wait and message me again." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return { chatHistory, loading, sendMessage };
};
