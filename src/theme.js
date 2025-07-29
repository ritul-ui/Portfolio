import { createTheme, colors } from "@mui/material";

const theme = createTheme({
  utils: {
    title: colors.grey[200],
    text: colors.grey[400],
    light: colors.green[100],
  },
  palette: {
    primary: {
      main: colors.grey[900],
      dark: "#000",
      light: "#fff",
    },
    secondary: {
      main: colors.teal[500],
      dark: colors.teal[700],
      light: colors.teal[100],
    },
  },
  typography: {
    fontFamily: "Josh, Arial, sans-serif",
  },
});
export default theme