import { useState } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import SendIcon from "@mui/icons-material/Send";

export default function InputBar({ onSend, loading }) {
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    onSend(input);
    setInput("");
  };

  return (
    <Box sx={{ display: "flex", gap: 1 }}>
      <TextField
        fullWidth
        size="small"
        placeholder="Ask about the resume…"
        value={input}
        onChange={e => setInput(e.target.value)}
        onKeyDown={e => e.key === "Enter" && handleSend()}
        sx={{ "& .MuiOutlinedInput-root": { borderRadius: 3 } }}
      />
      <IconButton
        color="primary"
        onClick={handleSend}
        disabled={loading}
        sx={{
          bgcolor: "primary.main",
          color: "white",
          borderRadius: 2,
          "&:hover": { bgcolor: "primary.dark" },
          "&.Mui-disabled": { bgcolor: "grey.300" },
        }}
      >
        <SendIcon fontSize="small" />
      </IconButton>
    </Box>
  );
}
