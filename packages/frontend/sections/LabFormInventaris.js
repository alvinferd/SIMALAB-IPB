import React from "react";
import { Box, Grid, Typography, IconButton, Chip } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { LabButtonDropdown } from "@/components/inputs/LabButton";
import LabDropZone from "@/components/surfaces/LabDropZone";
import LabFormField from "@/components/inputs/LabFormField";

const useStyles = makeStyles((theme) => ({
  kategoriLabel: {
    marginBottom: theme.spacing(1.5),
  },
  kategoriChip: {
    marginRight: theme.spacing(1),
  },
}));

function LabFormInventaris() {
  const classes = useStyles();
  const [dataKategori, setDataKategori] = React.useState([
    { key: 0, label: "Alat" },
    { key: 1, label: "Bahan" },
    { key: 2, label: "Bubuk" },
  ]);

  const handleDelete = (chipToDelete) => () => {
    setDataKategori((chips) =>
      chips.filter((chip) => chip.key !== chipToDelete.key)
    );
  };

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <LabFormField title="Nama Alat/Bahan" />
          <Box>
            <Typography>Lab</Typography>
            <LabButtonDropdown>Silakan pilih lab</LabButtonDropdown>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <LabFormField title="Kode Barang" />
          <LabFormField title="Jumlah Stok" />
        </Grid>
      </Grid>
      <Box>
        <Typography
          variant="h4"
          component="p"
          className={classes.kategoriLabel}
        >
          Kategori
        </Typography>
        {dataKategori.map((item) => {
          return (
            <Chip
              className={classes.kategoriChip}
              color="primary"
              variant="outlined"
              key={item.key}
              label={item.label}
              onDelete={handleDelete(item)}
            />
          );
        })}

        <IconButton color="primary" style={{ width: 32, height: 32 }}>
          +
        </IconButton>
      </Box>
      <Box mt={3}>
        <LabDropZone title="Upload Foto Alat/Bahan" />
      </Box>
    </>
  );
}

export default LabFormInventaris;
