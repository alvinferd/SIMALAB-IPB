import { Grid, Typography, TextField, Box, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { DropzoneArea } from "material-ui-dropzone";

const useStyles = makeStyles((theme) => ({
  textField: {
    marginTop: theme.spacing(2),
  },
}));

function LabFormPeminjaman({ type = "contained" }) {
  const classes = useStyles();
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={7}>
          <Box>
            <Typography variant="h4" component="div">
              Judul Penelitian
            </Typography>
            <TextField
              disabled={type === "preview" ? true : false}
              fullWidth
              variant="outlined"
              margin="dense"
            />
          </Box>
          <Box className={classes.textField}>
            <Typography variant="h4" component="div">
              Dosen Pembimbing
            </Typography>
            <TextField
              disabled={type === "preview" ? true : false}
              fullWidth
              variant="outlined"
              margin="dense"
            />
          </Box>
        </Grid>
        <Grid item xs={5}>
          <Typography variant="h4" component="div">
            Nomor Telepon
          </Typography>
          <TextField
            disabled={type === "preview" ? true : false}
            placeholder="XXXX-XXXX-XXXX"
            fullWidth
            variant="outlined"
            margin="dense"
          />
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
      <Grid container justify="flex-end" className={classes.textField}>
        <Button variant="contained" color="primary">
          Simpan
        </Button>
      </Grid>
    </>
  );
}

export default LabFormPeminjaman;
