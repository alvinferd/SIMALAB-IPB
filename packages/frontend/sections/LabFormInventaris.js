import React from "react";
import { useForm, useFieldArray, Controller } from "react-hook-form";

import {
  Box,
  Grid,
  Typography,
  FormControl,
  Select,
  MenuItem,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import LabDropZone from "@/components/surfaces/LabDropZone";
import LabFormField from "@/components/inputs/LabFormField";
import convertKodeBarang from "@/utils/tools/convertKodeBarang";

import { useSelector } from "react-redux";
import { dispatch } from "@/utils/redux/store";
import { inventarisByIdUpdate } from "@/utils/redux/slice/inventaris";

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

const propsForm = (items, kode_barang, kosongan) => {
  return {
    defaultValues: {
      NamaAlat: kosongan ? "" : items.NamaAlat,
      jenisInventaris: kosongan ? "" : items.NamaAlat,
      lab_id: kosongan ? "" : items.lab_id.id_labor,
      kodeBarang: kosongan ? "" : kode_barang,
      Quantity: kosongan ? "" : items.Quantity,
      kategori_id: kosongan ? "" : items.kategori_id.Kategori,
    },
  };
};

const PreviewForm = ({ watchAllFields, dataLab }) => {
  return (
    <LabCardInventaris
      title={watchAllFields.NamaAlat}
      subtitle={watchAllFields.jenisInventaris}
      // src="/images/microscope.jpg"
      src=""
      type={watchAllFields.kategori_id}
      code={watchAllFields.kodeBarang}
      lab={watchAllFields.lab_id}
      lab={
        dataLab.filter((item) => item.id_labor === watchAllFields.lab_id)[0]
          .ruangan
      }
      stock={watchAllFields.Quantity}
    />
  );
};

function LabFormInventaris({ items, kosongan = false }) {
  const classes = useStyles();

  const dataLab = useSelector((state) =>
    state.lab.data.map((item) => ({
      ...item,
    }))
  );

  const kode_barang = kosongan ? "0" : convertKodeBarang(items.id_alat);
  const { register, watch, control, handleSubmit } = useForm(
    propsForm(items, kode_barang)
  );

  const watchAllFields = watch();
  console.log("watchAllFields:", watchAllFields);

  const [openSaveDialog, setOpenSaveDialog] = React.useState(false);

  const handleClickSave = () => {
    setOpenSaveDialog(true);
  };

  const handleClickApply = (value) => {
    console.log("Ongoing Submit:", value);
    // dispatch(inventarisByIdUpdate({data: value, id: route.query.id}));
    setOpenSaveDialog(false);
  };

  return (
    <>
      <Grid container spacing={3} style={{ marginTop: 12 }}>
        <Grid item xs={6}>
          <form onSubmit={handleSubmit(handleClickApply)}>
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
                <LabFormField
                  title="Kode Barang"
                  value={kode_barang}
                  disabled
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
              </Grid>
            </Box>
            <Box mt={3}>
              <Controller
                name="gambarAlat"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <LabDropZone
                    title="Upload Foto Alat/Bahan"
                    onSave={handleClickSave}
                    type="submit"
                    onlyImage
                    helperText="Tahan dan lepaskan fail gambar di sini atau klik"
                    filesLimit={1}
                    value={value}
                    onChange={onChange}
                    // onChange={(files) => console.log("Files:", files)}
                  />
                )}
              />
            </Box>
            <LabDialogSimpan
              open={openSaveDialog}
              onClick={handleSubmit(handleClickApply)}
              onClose={() => setOpenSaveDialog(false)}
            />
          </form>
        </Grid>

        <Grid item xs={6}>
          <Typography variant="h4" component="h3">
            Pratinjau
          </Typography>

          <PreviewForm watchAllFields={watchAllFields} dataLab={dataLab} />
        </Grid>
      </Grid>
    </>
  );
}

export default LabFormInventaris;
