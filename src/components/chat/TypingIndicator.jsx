import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";

export default function TypingIndicator() {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
      <Avatar src="/Arunnew.png" alt="bot" sx={{ width: 28, height: 28 }} />
      <CircularProgress size={16} thickness={5} />
      <Typography variant="caption" color="text.secondary">Thinking…</Typography>
    </Box>
  );
}
