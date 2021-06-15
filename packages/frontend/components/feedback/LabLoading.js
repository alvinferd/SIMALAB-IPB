import { Dialog } from "@material-ui/core";
import { Box, Grid, CircularProgress } from "@material-ui/core";
import LabDialog from "@/components/feedback/LabDialog";

function LabLoading({ open }) {
  return (
    <Dialog
      // onClose={onClose}
      aria-labelledby="dialog-alert"
      open={open}
      maxWidth="xs"
    >
      <Grid
        container
        justify="center"
        alignItems="center"
        style={{ height: 120, width: 120 }}
      >
        <CircularProgress />
      </Grid>
    </Dialog>
  );
}

export default LabLoading;
