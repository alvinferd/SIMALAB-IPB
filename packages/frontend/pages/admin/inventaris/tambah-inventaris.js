import React from "react";
import { useRouter } from "next/router";

import { Button, Grid, Typography } from "@material-ui/core";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";

import LabFormInventaris from "@/sections/LabFormInventaris";
import SimalabLayout from "@/layouts/default";

function AdminFormInventarisPage() {
  const router = useRouter();
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
              Upload Alat dan Bahan
            </Typography>
          </Grid>
        </Grid>
      </Button>
      <LabFormInventaris />
    </>
  );
}
AdminFormInventarisPage.title = "Tambah Inventaris";
AdminFormInventarisPage.Layout = SimalabLayout;
export default AdminFormInventarisPage;
