import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: { main: "#0f172a" },
    secondary: { main: "#7c3aed" },
    success: { main: "#10b981" },
    background: {
      default: "#f8fafc",
      paper: "#ffffff",
    },
    text: {
      primary: "#0f172a",
      secondary: "#64748b",
    },
  },
  typography: {
    fontFamily: "Inter, serif",
    h3: {
      fontFamily: "Playfair Display",
      fontWeight: 600,
    },
    h4: {
      fontFamily: "Playfair Display",
      fontWeight: 600,
    },
    button: {
      textTransform: "none",
      fontWeight: 500,
    },
  },
  shape: {
    borderRadius: 14,
  },
});

export default theme;
