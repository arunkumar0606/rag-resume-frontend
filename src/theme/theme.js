import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
  shape: {
    borderRadius: 12,
  },
});

export default theme;
