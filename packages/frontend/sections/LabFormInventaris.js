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
import { useSelector } from "react-redux";

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

function LabFormInventaris({ items }) {
  const classes = useStyles();
  const dataLab = useSelector((state) =>
    state.lab.data.map((item) => ({
      ...item,
    }))
  );

  const { register, watch, control, handleSubmit } = useForm({
    defaultValues: {
      NamaAlat: items.NamaAlat,
      jenisInventaris: items.NamaAlat,
      lab_id: items.lab_id.ruangan,
      kodeBarang: "Kode Barang",
      Quantity: items.Quantity,
      kategori_id: items.kategori_id.Kategori,
    },
  });

  const watchAllFields = watch();
  const onSubmit = (data) => console.log(data);
  console.log("watchAllFields:", watchAllFields);

  const [openSaveDialog, setOpenSaveDialog] = React.useState(false);
  React.useEffect(() => {
    console.log("items", items);
  }, [items]);

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
                  name="NamaAlat"
                  control={control}
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
                    name="lab_id"
                    control={control}
                    render={({ field: { onChange, value } }) => (
                      <FormControl variant="outlined">
                        <Box mb={1}>
                          <Typography>Lab</Typography>
                        </Box>
                        <Select
                          labelId="lab_idLabel"
                          id="lab_idSelect"
                          fullWidth
                          value={value}
                          onChange={onChange}
                        >
                          {dataLab.map((item) => (
                            <MenuItem value={item.id_labor}>
                              {item.ruangan}
                            </MenuItem>
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
                  render={({ field: { onChange, value } }) => (
                    <LabFormField
                      title="Kode Barang"
                      value={value}
                      onChange={onChange}
                    />
                  )}
                />
                <Controller
                  name="Quantity"
                  control={control}
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
                <Chip
                  className={classes.kategoriChip}
                  color="primary"
                  variant="outlined"
                  label={watchAllFields.kategori_id}
                  onDelete={() => remove(0)}
                />

                <Controller
                  name="kategori_id"
                  control={control}
                  render={({ field }) => (
                    <LabFormField
                      className={classes.kategoriChip}
                      type="text"
                      {...field}
                      style={{ width: "18ch" }}
                    />
                  )}
                />

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
            title={watchAllFields.NamaAlat}
            subtitle={watchAllFields.jenisInventaris}
            src="/images/microscope.jpg"
            type={watchAllFields.kategori_id}
            code={watchAllFields.kodeBarang}
            lab={dataLab.filter(watchAllFields.lab_id).ruangan}
            stock={watchAllFields.Quantity}
          />
        </Grid>
      </Grid>
    </>
  );
}

export default LabFormInventaris;
