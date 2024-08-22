import { ThemeOptions, createTheme } from "@mui/material/styles";

const baseTheme: ThemeOptions = {
  components: {
    MuiFormControl: {
      defaultProps: {
        size: "small",
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: "outlined",
        size: "small",
      },
    },
  },
  typography: {
    button: {
      textTransform: "none",
    },
    fontFamily: ["'Rubik Variable'", "sans-serif"].join(", "),
    fontSize: 13,
    h1: {
      fontSize: "2.4rem",
      fontWeight: 500,
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 500,
    },
    h3: {
      fontSize: "1.8rem",
      fontWeight: 500,
    },
    h4: {
      fontSize: "1.6rem",
      fontWeight: 500,
    },
    h5: {
      fontSize: "1.4rem",
      fontWeight: 500,
    },
    h6: {
      fontSize: "1.2rem",
      fontWeight: 500,
    },
  },
  spacing: 6,
  shape: {
    borderRadius: 2,
  },
};

export const lightTheme = createTheme({
  ...baseTheme,
  palette: {
    mode: "light",
  },
});

export const darkTheme = createTheme({
  ...baseTheme,
  palette: {
    mode: "dark",
  },
});
