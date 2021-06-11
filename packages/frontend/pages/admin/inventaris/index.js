import React from "react";
import { Box, Grid, Typography } from "@material-ui/core";

import SimalabLayout from "@/layouts/default";
import { LabListItemLink } from "@/components/data_display/LabListItem";
import { LabButton, LabButtonDropdown } from "@/components/inputs/LabButton";
import LabPopper from "@/components/utils/LabPopper";
import LabCariInventaris from "@/sections/LabCariInventaris";
import {
  ListLabDummy,
  ListCariItemDummy,
} from "@/utils/dummy/ListItemsInventaris";

function AdminInventarisPage() {
  const [openPopper, setOpenPopper] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedListItem, setSelectedListItem] = React.useState(null);

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
              ? ListLabDummy[selectedListItem]
              : "Pilih Lab"}
          </LabButtonDropdown>
          <Box>
            <LabPopper anchorEl={anchorEl} open={openPopper}>
              {ListLabDummy.map((item, index) => {
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
      <LabCariInventaris items={ListCariItemDummy} />
    </>
  );
}

AdminInventarisPage.title = "Inventaris";
AdminInventarisPage.Layout = SimalabLayout;

export default AdminInventarisPage;
