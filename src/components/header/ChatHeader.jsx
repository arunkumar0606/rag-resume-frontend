import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function ChatHeader() {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
      <Avatar src="/Arunnew.png" alt="Arun" sx={{ width: 48, height: 48 }} />
      <Box>
        <Typography variant="h6" fontWeight={600}>Arun Kumar D</Typography>
        <Typography variant="caption" color="text.secondary">
          Resume Assistant - RAG & GPT-4o
        </Typography>
      </Box>
    </Box>
  );
}
