import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { Button, Grid, Typography } from "@material-ui/core";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";

import baseApi from "@/utils/api";
import SimalabLayout from "@/layouts/default";
import LabFormInventaris from "@/sections/LabFormInventaris";

function AdminEditInventarisPage() {
  const router = useRouter();
  const [inventaris, setInventaris] = useState(null);

  const inventarisByIdGet = async () => {
    const id_edit = router.query.id;

    return baseApi
      .get(`/alat/${id_edit}`)
      .then((data) => {
        console.log(data);
        setInventaris(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    inventarisByIdGet();
  }, []);

  useEffect(() => {
    console.log("inventaris", inventaris);
  }, [inventaris]);

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
      {inventaris ? <LabFormInventaris items={inventaris} /> : null}
    </>
  );
}
AdminEditInventarisPage.title = "Edit Inventaris";
AdminEditInventarisPage.Layout = SimalabLayout;
export default AdminEditInventarisPage;
