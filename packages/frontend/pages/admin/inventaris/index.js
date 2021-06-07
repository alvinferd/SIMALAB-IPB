import { Box, Grid, Typography } from "@material-ui/core";

import SimalabLayout from "@/layouts/default";
import { LabButton, LabButtonDropdown } from "@/components/inputs/LabButton";
import LabCariInventaris from "@/sections/LabCariInventaris";

function AdminInventarisPage() {
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
          <LabButton style={{ marginTop: 12 }}>Upload Alat/Bahan</LabButton>
        </Grid>
        <Grid item>
          <Typography variant="h3" component="h2">
            Pilih Lab
          </Typography>
          <LabButtonDropdown style={{ marginTop: 12 }}>
            Lab Biokimia Medis
          </LabButtonDropdown>
        </Grid>
      </Grid>
      <LabCariInventaris />
    </>
  );
}

AdminInventarisPage.title = "Inventaris";
AdminInventarisPage.Layout = SimalabLayout;

export default AdminInventarisPage;
