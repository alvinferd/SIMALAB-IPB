import { Box, Grid, CircularProgress } from "@material-ui/core";

function LabLoading() {
  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      style={{ height: "calc(66vh)", width: "100%" }}
    >
      <Box flexGrow={1} />
      <CircularProgress />
      <Box flexGrow={1} />
    </Grid>
  );
}

export default LabLoading;
