import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { Button, Grid, Typography } from "@material-ui/core";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";

import { useSelector } from "react-redux";
import { dispatch } from "@/utils/redux/store";
import { inventarisByIdGet } from "@/utils/redux/slice/inventaris";

import SimalabLayout from "@/layouts/default";
import LabFormInventaris from "@/sections/LabFormInventaris";

function AdminEditInventarisPage() {
  const router = useRouter();

  useEffect(() => {
    dispatch(inventarisByIdGet(router.query.id));
  }, []);

  const dataInventarisById = useSelector((state) => state.inventaris.byId);

  useEffect(() => {
    console.log("inventaris", dataInventarisById);
  }, [dataInventarisById]);

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
      {dataInventarisById ? (
        <LabFormInventaris items={dataInventarisById} />
      ) : null}
    </>
  );
}
AdminEditInventarisPage.title = "Edit Inventaris";
AdminEditInventarisPage.Layout = SimalabLayout;
export default AdminEditInventarisPage;
