import { Box, Container, ThemeProvider, Typography } from "@material-ui/core";

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
          <Container>
            {children}
            <Box mt={5} mb={3}>
              <Typography color="textSecondary" align="center">
                Copyright © 2021 SIMALAB, Developed by <b>PSBO55 Kelompok 4</b>
              </Typography>
            </Box>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default SimalabLayout;
