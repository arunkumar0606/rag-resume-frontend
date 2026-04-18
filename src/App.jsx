import Box from "@mui/material/Box";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import ChatHeader from "./components/header/ChatHeader";
import ChatWindow from "./components/chat/ChatWindow";
import InputBar from "./components/chat/InputBar";
import { useChat } from "./hooks/useChat";
import theme from "./theme/theme";
import Banner from "./components/chat/Banner";

export default function App() {
  const { chatHistory, loading, sendMessage } = useChat();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ maxWidth: 600, mx: "auto", mt: 5, px: 2 }}>
        <Banner />
        <ChatHeader />
        <ChatWindow
          chatHistory={chatHistory}
          loading={loading}
          onHintClick={sendMessage}
        />
        <InputBar onSend={sendMessage} loading={loading} />
      </Box>
    </ThemeProvider>
  );
}
