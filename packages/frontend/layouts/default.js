import { Box, Container, ThemeProvider } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import CustomTheme from "@/themes/default";

import LabSidebarDrawer from "@/components/navigation/LabSidebarDrawer";
import LabTopbar from "@/components/navigation/LabTopbar";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    width: "100%",
    maxWidth: "100vw",
  },
}));

function SimalabLayout({ children }) {
  const classes = useStyles();
  return (
    <ThemeProvider theme={CustomTheme}>
      <Box className={classes.container}>
        <LabSidebarDrawer />
        <Box width="100%">
          <LabTopbar />
          <Container>{children}</Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default SimalabLayout;
