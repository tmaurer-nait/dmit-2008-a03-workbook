import { createTheme } from "@mui/material";

const themeOptions = {
  palette: {
    primary: {
      light: "#ed5a97",
      dark: "#9e0947",
      main: "#3714fc",
      contrastText: "#FFFFFF",
    },
    secondary: {
      light: "#edea51",
      dark: "#bfbc1b",
      main: "#ebe728",
      contrastText: "#000000",
    },
  },
  typography: {
    h2: {
      fontFamily: "Roboto",
    },
  },
};

const theme = createTheme(themeOptions);

export { theme };
