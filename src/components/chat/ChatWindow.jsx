import { useEffect, useRef } from "react";
import Paper from "@mui/material/Paper";
import EmptyState from "./EmptyState";
import MessageBubble from "./MessageBubble";
import TypingIndicator from "./TypingIndicator";

export default function ChatWindow({ chatHistory, loading, onHintClick }) {
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatHistory, loading]);

  return (
    <Paper
      variant="outlined"
      sx={{
        height: 420,
        overflowY: "auto",
        p: 2,
        display: "flex",
        flexDirection: "column",
        gap: 1.5,
        mb: 2,
        borderRadius: 3,
      }}
    >
      {chatHistory.length === 0 && !loading && (
        <EmptyState onHintClick={onHintClick} />
      )}

      {chatHistory.map((msg, idx) => (
        <MessageBubble key={idx} msg={msg} />
      ))}

      {loading && <TypingIndicator />}

      <div ref={chatEndRef} />
    </Paper>
  );
}
