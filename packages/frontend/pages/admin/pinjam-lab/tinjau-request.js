import { useRouter } from "next/router";

import { Grid, Button, Typography } from "@material-ui/core";

import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";

import SimalabLayout from "@/layouts/default";
import { LabSuccessButton, LabWarnButton } from "@/components/inputs/LabButton";
import { LabCard, LabCardAlatInstrumen } from "@/components/surfaces/LabCard";
import LabFormPeminjaman from "@/sections/LabFormPeminjaman";
import LabIdentitasPeminjam from "@/sections/LabIdentitasPeminjam";
import CustomTheme from "@/themes/default";

function AdminTinjauRequestPage() {
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
              Tinjau Request
            </Typography>
          </Grid>
        </Grid>
      </Button>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <LabCard title="Form Peminjaman Lab" margin={16}>
            <LabFormPeminjaman type="preview" viewRequest={true} />
          </LabCard>
          <LabCard title="Identitas Peminjam" margin={20}>
            <LabIdentitasPeminjam />
          </LabCard>
        </Grid>
        <Grid item xs={6}>
          <LabCard title="Peminjaman Alat Instrumen" margin={16}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <LabCardAlatInstrumen />
              </Grid>
              <Grid item xs={6}>
                <LabCardAlatInstrumen />
              </Grid>
            </Grid>
          </LabCard>
        </Grid>
      </Grid>
      <Grid container justify="flex-end" spacing={1} style={{ marginTop: 40 }}>
        <Grid item>
          <LabWarnButton>Tolak</LabWarnButton>
        </Grid>
        <Grid item>
          <LabSuccessButton>Setuju</LabSuccessButton>
        </Grid>
      </Grid>
    </>
  );
}

AdminTinjauRequestPage.title = "Tinjau Request";
AdminTinjauRequestPage.Layout = SimalabLayout;

export default AdminTinjauRequestPage;
