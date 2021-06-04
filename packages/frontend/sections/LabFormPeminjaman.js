import { Grid, Typography, TextField, Box, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { DropzoneArea } from "material-ui-dropzone";
import LabFormField from "@/components/inputs/LabFormField";

const useStyles = makeStyles((theme) => ({
  textField: {
    marginBottom: theme.spacing(2),
  },
}));

const ButtonSave = () => {
  return (
    <Grid container justify="flex-end">
      <Button variant="contained" color="primary">
        Simpan
      </Button>
    </Grid>
  );
};

const DropZoneView = () => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.textField}>
        <Typography variant="h4" component="div">
          Upload berkas form
        </Typography>
        <Typography component="div" color="textSecondary">
          Max upload 3 file
        </Typography>
        <Box mt={1}>
          <DropzoneArea />
        </Box>
      </Box>
      <ButtonSave />
    </>
  );
};

function LabFormPeminjaman({ type, viewRequest = false }) {
  const classes = useStyles();
  const isPreview = type === "preview" ? true : false;
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={7}>
          <LabFormField title="Judul Penelitian" readOnly={isPreview} />
          <LabFormField title="Dosen Pembimbing" readOnly={isPreview} />
        </Grid>
        <Grid item xs={5}>
          <LabFormField
            title="Nomor Telepon"
            placeholder="XXXX-XXXX-XXXX"
            readOnly={isPreview}
          />
          {viewRequest === true ? (
            <LabFormField title="Laboratorium" readOnly={isPreview} />
          ) : null}
        </Grid>
      </Grid>
      <Box className={classes.textField}>
        <Typography variant="h4" component="div">
          Unduh berkas form
        </Typography>
        <Typography component="div" color="textSecondary">
          Anda belum mengupload apapun
        </Typography>
      </Box>
      {viewRequest === false ? DropZoneView() : null}
    </>
  );
}

export default LabFormPeminjaman;
