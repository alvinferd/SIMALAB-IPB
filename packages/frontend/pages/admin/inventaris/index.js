import { useEffect, useState } from "react";
import { Box, Grid, Typography } from "@material-ui/core";

import { useSelector } from "react-redux";
import { dispatch } from "@/utils/redux/store";
import { inventarisGet } from "@/utils/redux/slice/inventaris";
import { labGet } from "@/utils/redux/slice/lab";

import SimalabLayout from "@/layouts/default";
import { LabListItemLink } from "@/components/data_display/LabListItem";
import { LabButton, LabButtonDropdown } from "@/components/inputs/LabButton";
import LabPopper from "@/components/utils/LabPopper";
import LabCariInventaris from "@/sections/LabCariInventaris";

function AdminInventarisPage() {
  useEffect(() => {
    dispatch(inventarisGet());
    dispatch(labGet());
  }, []);

  const dataInventaris = useSelector((state) =>
    state.inventaris.data.map((item) => ({
      ...item,
    }))
  );

  const dataLab = useSelector((state) =>
    state.lab.data.map((item) => item.ruangan)
  );

  const [openPopper, setOpenPopper] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedListItem, setSelectedListItem] = useState(null);

  const handleClickPilihLab = (event) => {
    setAnchorEl(event.currentTarget);
    setOpenPopper((prev) => !prev);
  };

  return (
    <>
      <Grid container spacing={5}>
        <Grid item>
          <Typography variant="h3" component="h2">
            Inventaris Anda
          </Typography>
          <Typography color="textSecondary">
            Upload alat/bahan baru laboratorium Anda disini
          </Typography>
          <LabButton
            href="/admin/inventaris/tambah-inventaris"
            style={{ marginTop: 12 }}
          >
            Upload Alat/Bahan
          </LabButton>
        </Grid>
        <Grid item>
          <Typography variant="h3" component="h2">
            Pilih Lab
          </Typography>

          <LabButtonDropdown
            onClick={handleClickPilihLab}
            style={{ marginTop: 12 }}
          >
            {selectedListItem !== null
              ? dataLab[selectedListItem]
              : "Pilih Lab"}
          </LabButtonDropdown>
          <Box>
            <LabPopper anchorEl={anchorEl} open={openPopper}>
              {dataLab.map((item, index) => {
                return (
                  <LabListItemLink
                    text={item}
                    onClick={() => {
                      setSelectedListItem(index);
                      setOpenPopper(false);
                    }}
                    key={index}
                    href="#"
                    selected={selectedListItem === index ? true : false}
                  />
                );
              })}
            </LabPopper>
          </Box>
        </Grid>
      </Grid>
      <LabCariInventaris items={dataInventaris} />
    </>
  );
}

AdminInventarisPage.title = "Inventaris";
AdminInventarisPage.Layout = SimalabLayout;

export default AdminInventarisPage;
