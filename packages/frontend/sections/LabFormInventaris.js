import React from "react";
import { useForm, useFieldArray, Controller } from "react-hook-form";

import {
  Box,
  Grid,
  Typography,
  IconButton,
  Chip,
  FormControl,
  Select,
  MenuItem,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import LabDropZone from "@/components/surfaces/LabDropZone";
import LabFormField from "@/components/inputs/LabFormField";
import { ListLabDummy } from "@/utils/dummy/ListItemsInventaris";

import LabDialogSimpan from "@/sections/LabDialogSimpan";
import LabCardInventaris from "@/sections/LabCardInventaris";

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
  const { register, watch, control, handleSubmit } = useForm({
    defaultValues: {
      kategoriInventaris: [{ name: "Alat" }],
    },
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "kategoriInventaris",
  });

  const watchAllFields = watch();
  const onSubmit = (data) => console.log(data);
  console.log("watchAllFields:", watchAllFields);

  const [openSaveDialog, setOpenSaveDialog] = React.useState(false);

  const handleClickSave = () => {
    setOpenSaveDialog(true);
  };
  const handleClickApply = () => {
    setOpenSaveDialog(close);
  };

  return (
    <>
      <Grid container spacing={3} style={{ marginTop: 12 }}>
        <Grid item xs={6}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2}>
              <Grid item xs={8}>
                <Controller
                  name="namaInventaris"
                  control={control}
                  defaultValue="Nama Inventaris"
                  render={({ field: { onChange, value } }) => (
                    <LabFormField
                      title="Nama Alat/Bahan"
                      value={value}
                      onChange={onChange}
                    />
                  )}
                />
                <Controller
                  name="jenisInventaris"
                  control={control}
                  defaultValue="Jenis Inventaris"
                  render={({ field: { onChange, value } }) => (
                    <LabFormField
                      title="Jenis Alat/Bahan"
                      value={value}
                      onChange={onChange}
                    />
                  )}
                />
                <Box mb={2}>
                  <Controller
                    name="jenisLab"
                    control={control}
                    defaultValue="Jenis Lab"
                    render={({ field: { onChange, value } }) => (
                      <FormControl variant="outlined">
                        <Box mb={1}>
                          <Typography>Lab</Typography>
                        </Box>
                        <Select
                          labelId="jenisLabSelectLabel"
                          id="jenisLabSelect"
                          fullWidth
                          value={value}
                          onChange={onChange}
                        >
                          {ListLabDummy.map((item) => (
                            <MenuItem value={item}>{item}</MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    )}
                  />
                </Box>
              </Grid>
              <Grid item xs={4}>
                <Controller
                  name="kodeBarang"
                  control={control}
                  defaultValue="Kode Barang"
                  render={({ field: { onChange, value } }) => (
                    <LabFormField
                      title="Kode Barang"
                      value={value}
                      onChange={onChange}
                    />
                  )}
                />
                <Controller
                  name="jumlahStok"
                  control={control}
                  defaultValue={0}
                  render={({ field: { onChange, value } }) => (
                    <LabFormField
                      title="Jumlah Stok"
                      type="number"
                      value={value}
                      onChange={onChange}
                    />
                  )}
                />
              </Grid>
            </Grid>
            <Box mt={1}>
              <Typography
                variant="h4"
                component="p"
                className={classes.kategoriLabel}
              >
                Kategori
              </Typography>
              <Grid
                container
                item
                xs={12}
                display="flex"
                justify="flex-start"
                alignItems="center"
              >
                {watchAllFields.kategoriInventaris.map((item, index) => {
                  return (
                    <Chip
                      className={classes.kategoriChip}
                      color="primary"
                      variant="outlined"
                      key={item.index}
                      label={item.name}
                      onDelete={() => remove(index)}
                    />
                  );
                })}
                {fields.map((item, index) => {
                  return (
                    <>
                      <Controller
                        key={item.id}
                        name={`kategoriInventaris.${index}.name`}
                        control={control}
                        defaultValue="Tambah kategori"
                        render={({ field }) => (
                          <LabFormField
                            className={classes.kategoriChip}
                            type="text"
                            {...field}
                            style={{ width: "18ch" }}
                          />
                        )}
                      />
                    </>
                  );
                })}
                <IconButton
                  color="primary"
                  onClick={() => {
                    append({ name: "Kategori Tambahan" });
                  }}
                  style={{ width: 32, height: 32 }}
                >
                  +
                </IconButton>
              </Grid>
            </Box>
            <Box mt={3}>
              <LabDropZone
                title="Upload Foto Alat/Bahan"
                onSave={handleClickSave}
                type="submit"
              />
            </Box>
          </form>
        </Grid>
        <LabDialogSimpan
          open={openSaveDialog}
          onClick={handleClickApply}
          onClose={() => setOpenSaveDialog(false)}
        />

        <Grid item xs={6}>
          <Typography variant="h4" component="h3">
            Pratinjau
          </Typography>
          <LabCardInventaris
            title={watchAllFields.namaInventaris}
            subtitle={watchAllFields.jenisInventaris}
            src="/images/microscope.jpg"
            type={watchAllFields.kategoriInventaris}
            code={watchAllFields.kodeBarang}
            lab={watchAllFields.jenisLab}
            stock={watchAllFields.jumlahStok}
          />
        </Grid>
      </Grid>
    </>
  );
}

export default LabFormInventaris;
