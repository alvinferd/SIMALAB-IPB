import { createMuiTheme } from "@material-ui/core";

const CustomTheme = createMuiTheme({
  palette: {
    type: "light",
    primary: {
      main: "#2196F3",
    },
    secondary: {
      main: "#1C7BD9",
    },
    blue: {
      light: "#2196F3",
      main: "#487FF6",
      dark: "#1C7BD9",
    },
    error: {
      main: "#D72B27",
    },
    success: {
      main: "#7DBE6D",
    },
    text: {
      primary: "#3A3A3A",
      secondary: "#747474",
      disabled: "#BABABE",
    },
    divider: "#DFDFDF",
  },
  typography: {
    fontFamily: ['"Open Sans"', "Arial", "sans-serif"].join(","),
    fontWeightBold: 600,
    h1: {
      fontSize: "28px",
      fontWeight: 800,
    },
    h2: {
      fontSize: "24px",
      fontWeight: 800,
    },
    h3: {
      fontSize: "18px",
      fontWeight: 600,
    },
    h4: {
      fontSize: "14px",
      fontWeight: 600,
    },
    subtitle1: {
      fontSize: "16px",
    },
    subtitle2: {
      fontSize: "11px",
    },
    body1: {
      fontSize: "14px",
    },
  },
  shape: {
    borderRadius: 8,
  },
  button: {
    fontSize: "14px",
  },
  props: {
    MuiTextField: {
      variant: "filled",
    },
  },
});

export default CustomTheme;
