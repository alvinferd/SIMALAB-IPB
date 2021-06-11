import { useRouter } from "next/router";

import { Button, Grid, Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { DropzoneArea } from "material-ui-dropzone";

import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";

import LabButton from "@/components/inputs/LabButton";
import LabCard from "@/components/surfaces/LabCard";
import LabFormPeminjaman from "@/sections/LabFormPeminjaman";
import SimalabLayout from "@/layouts/default";

const useStyles = makeStyles((theme) => ({
  textField: {
    marginBottom: theme.spacing(4),
  },
  containerForm: {
    marginTop: theme.spacing(1),
  },
}));

function FormPeminjamanPage() {
  const classes = useStyles();
  const router = useRouter();
  return (
    <>
      <Button
        style={{ position: "relative", left: -12 }}
        onClick={() => router.back()}
      >
        <Grid container justify="center" alignItems="center">
          <ChevronLeftIcon
            style={{
              width: 28,
              height: 28,
              position: "relative",
              left: -4,
            }}
          />
          <Grid item>
            <Typography
              variant="h3"
              style={{ textTransform: "none", fontWeight: 600 }}
            >
              Form Peminjaman Lab
            </Typography>
          </Grid>
        </Grid>
      </Button>
      <Grid container spacing={5} className={classes.containerForm}>
        <Grid item xs={6}>
          <Box className={classes.textField}>
            <Typography variant="h4" gutterBottom>
              Buat form peminjaman lab
            </Typography>
            <Typography color="textSecondary">
              Buat Form peminjaman baru, Batasan dari berkas form yang dapat
              diupload adalah 4 file, silahkan untuk menghapus file yang tidak
              diperlukan untuk mengupload berkas baru.
            </Typography>
          </Box>
          <Box className={classes.textField}>
            <Typography variant="h4" gutterBottom>
              Berkas form tersedia
            </Typography>
            <Typography color="textSecondary">
              Anda belum mengupload apapun
            </Typography>
          </Box>
          <Box className={classes.textField}>
            <Typography variant="h4" gutterBottom>
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
            <LabButton>Simpan</LabButton>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h4" gutterBottom>
            Pratinjau
          </Typography>
          <LabCard title="Form Peminjaman">
            <LabFormPeminjaman type="preview" />
          </LabCard>
        </Grid>
      </Grid>
    </>
  );
}

FormPeminjamanPage.title = "Pinjam Lab";
FormPeminjamanPage.Layout = SimalabLayout;
export default FormPeminjamanPage;
