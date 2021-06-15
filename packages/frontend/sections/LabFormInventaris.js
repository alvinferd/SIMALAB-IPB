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
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

import LabDialogAlert from "@/components/feedback/LabAlert";
import LabFormField from "@/components/inputs/LabFormField";
import LabButton from "@/components/inputs/LabButton";
import convertKodeBarang from "@/utils/tools/convertKodeBarang";

import { useSelector } from "react-redux";
import { dispatch } from "@/utils/redux/store";
import {
  inventarisByIdEdit,
  inventarisPost,
} from "@/utils/redux/slice/inventaris";
import { kategoriGet } from "@/utils/redux/slice/kategori";

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

const propsForm = (items, kode_barang) => {
  return {
    defaultValues: {
      NamaAlat: items.NamaAlat,
      SubInv: items.SubInv,
      lab_id: items.lab_id.id_labor,
      Quantity: items.Quantity,
      kategori_id: items.kategori_id.Kategori,
      kode_barang: kode_barang,
    },
  };
};

const propsFormKosongan = () => {
  return {
    defaultValues: {
      NamaAlat: "",
      lab_id: "",
      SubInv: "",
      Quantity: "",
      kategori_id: "",
      kode_barang: "0",
    },
  };
};

const PreviewForm = ({ watchAllFields, dataLab }) => {
  return (
    <LabCardInventaris
      title={watchAllFields.NamaAlat}
      subtitle={watchAllFields.SubInv}
      // src="/images/microscope.jpg"
      src=""
      type={watchAllFields.kategori_id}
      code={watchAllFields.kode_barang}
      lab={watchAllFields.lab_id}
      // lab={
      //   dataLab.filter((item) => item.id_labor === watchAllFields.lab_id)[0]
      //     .ruangan
      // }
      stock={watchAllFields.Quantity}
    />
  );
};

function LabFormInventaris({ items, kosongan = false, type }) {
  const classes = useStyles();
  const fileInput = React.createRef();

  React.useEffect(() => {
    dispatch(kategoriGet());
  }, []);

  const dataKategori = useSelector((state) =>
    state.kategori.data.map((item) => ({
      ...item,
    }))
  );

  const dataLab = useSelector((state) =>
    state.lab.data.map((item) => ({
      ...item,
    }))
  );

  const kode_barang = kosongan ? "0" : convertKodeBarang(items.id_alat);
  const { register, watch, control, handleSubmit } = useForm(
    kosongan ? propsFormKosongan() : propsForm(items, kode_barang)
  );

  const watchAllFields = watch();
  // console.log("watchAllFields:", watchAllFields);

  const [openSaveDialog, setOpenSaveDialog] = React.useState(false);

  const handleClickApply = (value) => {
    // console.log("Ongoing Submit:", value);
    // dispatch(inventarisByIdUpdate({data: value, id: route.query.id}));
    if (type === "add") {
      dispatch(
        inventarisPost({
          NamaAlat: value.NamaAlat,
          lab_id: value.lab_id,
          SubInv: value.SubInv,
          Quantity: value.Quantity,
          kategori_id: value.kategori_id,
          gambarAlat: fileInput.current.files[0],
        })
      );
    }
    if (type === "edit") {
      dispatch(
        inventarisByIdEdit({
          id_alat: items.id_alat,
          NamaAlat: value.NamaAlat,
          lab_id: value.lab_id,
          SubInv: value.SubInv,
          Quantity: value.Quantity,
          kategori_id: value.kategori_id,
          gambarAlat: fileInput.current.files[0],
        })
      );
    }
    setOpenSaveDialog(false);
  };

  return (
    <>
      <Grid container spacing={3} style={{ marginTop: 12 }}>
        <Grid item xs={6}>
          <form
            onSubmit={handleSubmit(handleClickApply)}
            enctype="multipart/form-data"
          >
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
                  name="SubInv"
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
            <Box mb={2}>
              <Controller
                name="kategori_id"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <FormControl variant="outlined">
                    <Box mb={1}>
                      <Typography>Kategori</Typography>
                    </Box>
                    <Select
                      labelId="kategori_idLabel"
                      id="kategori_idSelect"
                      fullWidth
                      value={value}
                      onChange={onChange}
                    >
                      {dataKategori.map((item) => (
                        <MenuItem value={item.id_kategori}>
                          {item.Kategori}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                )}
              />
            </Box>
            <Box mt={3}>
              <Typography
                variant="h4"
                component="p"
                style={{ marginBottom: 8 }}
              >
                Upload gambar Alat
              </Typography>
              <input
                name="gambarAlat"
                type="file"
                accept="image/*"
                ref={fileInput}
                style={{ marginBottom: 28 }}
              />
            </Box>
            <LabButton type="submit">Submit</LabButton>
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
