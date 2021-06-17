import Link from "next/link";
import { Grid, Typography, Box, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import LabDropZone from "@/components/surfaces/LabDropZone";
import LabFormField from "@/components/inputs/LabFormField";

const useStyles = makeStyles((theme) => ({
  textField: {
    marginBottom: theme.spacing(2),
  },
}));

function LabFormPeminjaman({ type, data, viewRequest = false }) {
  const classes = useStyles();
  const isPreview = type === "preview" ? true : false;
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={7}>
          <LabFormField
            title="Judul Penelitian"
            readOnly={isPreview}
            multiline
            value={viewRequest ? data.title : null}
          />
          <LabFormField
            title="Dosen Pembimbing"
            readOnly={isPreview}
            value={viewRequest ? data.dosen : null}
          />
        </Grid>
        <Grid item xs={5}>
          <LabFormField
            title="Nomor Telepon"
            placeholder="XXXX-XXXX-XXXX"
            readOnly={isPreview}
            value={viewRequest ? data.phone : null}
          />
          {viewRequest === true ? (
            <LabFormField
              title="Laboratorium"
              readOnly={isPreview}
              value={viewRequest ? data.lab : null}
            />
          ) : null}
        </Grid>
      </Grid>
      <Box className={classes.textField}>
        <Typography variant="h4" component="div" style={{ marginBottom: 12 }}>
          Unduh berkas form
        </Typography>
        {viewRequest === true ? (
          data.file === null ? (
            <Typography component="div" color="textSecondary">
              Anda belum mengupload apapun
            </Typography>
          ) : (
            <Grid container spacing={2}>
              {data.file.map((item) => (
                <Grid item style={{ textAlign: "center" }}>
                  <a href={item}>
                    <img src="https://img.icons8.com/color/96/000000/pdf.png" />
                    <Typography>{item.split("/").at(-1)}</Typography>
                  </a>
                </Grid>
              ))}
            </Grid>
          )
        ) : null}
      </Box>
      {viewRequest === false ? (
        <LabDropZone title="Upload berkas form" subtitle="Max upload 3 file" />
      ) : null}
    </>
  );
}

export default LabFormPeminjaman;
