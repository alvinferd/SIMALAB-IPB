import { Grid, Typography } from "@material-ui/core";
import LabDialog from "@/components/feedback/LabDialog";

const LabDialogAlert = ({ onClose, open, title, message, icon }) => {
  return (
    <LabDialog title={title} onClose={onClose} open={open}>
      <Grid container direction="column" justify="center" alignItems="center">
        {icon}
        <Typography variant="body1">{message}</Typography>
      </Grid>
    </LabDialog>
  );
};

export default LabDialogAlert;
