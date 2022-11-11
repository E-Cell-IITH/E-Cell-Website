import { createTheme } from "@mui/material";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 650,
      md: 768,
      lg: 992,
      xl: 1400,
      xxl: 1700,
    },
  },
});

export default theme;
