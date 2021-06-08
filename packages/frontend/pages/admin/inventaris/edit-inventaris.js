import { Button, Grid, Typography } from "@material-ui/core";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";

import SimalabLayout from "@/layouts/default";
import LabFormInventaris from "@/sections/LabFormInventaris";
import LabCardInventaris from "@/sections/LabCardInventaris";

function AdminEditInventarisPage() {
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
              Edit Alat dan Bahan
            </Typography>
          </Grid>
        </Grid>
      </Button>
      <Grid container spacing={3} style={{ marginTop: 12 }}>
        <Grid item xs={6}>
          <LabFormInventaris />
        </Grid>
        <Grid item xs={6}>
          <LabCardInventaris
            title="Mikroskop"
            subtitle="Mikroskop Cahaya"
            src="/images/microscope.jpg"
            type={["Alat"]}
            code={24}
            lab="Mikrobiologi"
            stock={4}
          />
        </Grid>
      </Grid>
    </>
  );
}
AdminFormInventarisPage.title = "Tambah Inventaris";
AdminFormInventarisPage.Layout = SimalabLayout;
export default AdminFormInventarisPage;
