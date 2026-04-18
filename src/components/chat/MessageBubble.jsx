import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

export default function MessageBubble({ msg }) {
  const isUser = msg.type === "user";

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: isUser ? "flex-end" : "flex-start",
        alignItems: "flex-end",
        gap: 1,
      }}
    >
      {!isUser && (
        <Avatar src="/Arunnew.png" alt="bot" sx={{ width: 28, height: 28 }} />
      )}
      <Paper
        elevation={0}
        sx={{
          px: 2,
          py: 1,
          maxWidth: "72%",
          borderRadius: isUser ? "18px 18px 4px 18px" : "18px 18px 18px 4px",
          bgcolor: isUser ? "primary.main" : "grey.100",
          color: isUser ? "primary.contrastText" : "text.primary",
        }}
      >
        <Typography variant="body2">{msg.text}</Typography>
      </Paper>
    </Box>
  );
}
