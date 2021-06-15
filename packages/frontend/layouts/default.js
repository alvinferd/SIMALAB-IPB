import { Box, Container, ThemeProvider, Typography } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import CustomTheme from "@/themes/default";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import ErrorIcon from "@material-ui/icons/Error";

import LabSidebarDrawer from "@/components/navigation/LabSidebarDrawer";
import LabTopbar from "@/components/navigation/LabTopbar";
import LabLoading from "@/components/feedback/LabLoading";
import LabDialogAlert from "@/components/feedback/LabAlert";

import { useSelector } from "react-redux";
import { dispatch } from "@/utils/redux/store";
import {
  alertSetError,
  alertSetSuccess,
  alertSetMessage,
} from "@/utils/redux/slice/alert";
import CheckAuth from "@/utils/hooks/checkAuth";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    width: "100%",
    maxWidth: "100vw",
  },
}));

function SimalabLayout({ children }) {
  CheckAuth();
  const classes = useStyles();
  const loadingState = useSelector((state) => state.loading);
  const successState = useSelector((state) => state.alert.success);
  const errorState = useSelector((state) => state.alert.error);
  const messageState = useSelector((state) => state.alert.message);

  const reverseAlert = () => {
    // console.log("Clicked!");
    if (errorState) {
      dispatch(alertSetError(false));
    }
    if (successState) {
      dispatch(alertSetSuccess(false));
    }
    dispatch(alertSetMessage(""));
  };

  return (
    <ThemeProvider theme={CustomTheme}>
      <LabLoading open={loadingState} />
      <LabDialogAlert
        open={errorState || successState}
        onClose={() => reverseAlert()}
        title={errorState ? "Error" : successState ? "Berhasil" : null}
        message={messageState}
        icon={
          successState ? (
            <CheckCircleIcon
              color="primary"
              style={{ fontSize: 50, marginBottom: 12 }}
            />
          ) : (
            <ErrorIcon
              color="primary"
              style={{ fontSize: 50, marginBottom: 12 }}
            />
          )
        }
      />
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
