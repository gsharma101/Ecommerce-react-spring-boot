import { createTheme } from "@mui/material";

const customeTheme = createTheme({
  palette: {
    mode: "light", // This sets the theme to dark mode
    primary: {
      main: "#00927c",

    },
    secondary: {
      main: "#EAF0F1", 
      // main:"#ffad4d"
    },
   
   
  },
});

export default customeTheme;