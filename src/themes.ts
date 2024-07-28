import { createTheme } from "@mui/material";
import type { TypographyOptions } from "@mui/material/styles/createTypography";

const typography: TypographyOptions = {
  button: {
    textTransform: "none",
  },
  fontFamily: "'Rubik Variable', sans-serif",
};

export const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
  typography,
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
  typography,
});
