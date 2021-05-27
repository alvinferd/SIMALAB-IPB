import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    type: "light",
    primary: {
      main: "#2196F3",
    },
    secondary: {
      main: "#1C7BD9",
    },
    blue: {
      lighter: "#2196F3",
      main: "#487FF6",
      darker: "#1C7BD9",
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
      fontSize: "36px",
    },
    h2: {
      fontSize: "24px",
    },
    h3: {
      fontSize: "16px",
    },
    h4: {
      fontSize: "11px",
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

export default theme;
