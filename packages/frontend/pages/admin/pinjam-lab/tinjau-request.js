import { useRouter } from "next/router";

import { Grid, Button, Typography } from "@material-ui/core";

import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";

import SimalabLayout from "@/layouts/default";
import { LabSuccessButton, LabWarnButton } from "@/components/inputs/LabButton";
import { LabCard, LabCardAlatInstrumen } from "@/components/surfaces/LabCard";

import LabFormPeminjaman from "@/sections/LabFormPeminjaman";
import LabIdentitasPeminjam from "@/sections/LabIdentitasPeminjam";
import LabCardPagination from "@/sections/LabCardPagination";

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
          <LabCard title="Identitas Peminjam" margin={16}>
            <LabIdentitasPeminjam />
          </LabCard>
          <LabCard title="Peminjaman Alat Instrumen" margin={24}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <LabCardAlatInstrumen
                  title="Mikroskop"
                  subtitle="Mikroskop Cahaya"
                  jenis="Alat"
                  image="/images/microscope.jpg"
                />
              </Grid>
              <Grid item xs={6}>
                <LabCardAlatInstrumen
                  title="Mikroskop"
                  subtitle="Mikroskop Cahaya"
                  jenis="Alat"
                  image="/images/microscope.jpg"
                />
              </Grid>
            </Grid>
            <LabCardPagination now={1} total={1} />
          </LabCard>
        </Grid>
        <Grid item xs={6}>
          <LabCard title="Form Peminjaman Lab" margin={16}>
            <LabFormPeminjaman type="preview" viewRequest={true} />
          </LabCard>
          <Grid
            container
            justify="flex-end"
            spacing={1}
            style={{ marginTop: 32 }}
          >
            <Typography
              component="p"
              color="textSecondary"
              gutterBottom
              align="right"
              style={{ marginBottom: 12 }}
            >
              Dengan menekan tombol <strong>setuju</strong> maka anda
              mengizinkan request peminjaman laboratorium dan peminjaman
              inventaris.
            </Typography>
            <Grid item>
              <LabWarnButton>Tolak</LabWarnButton>
            </Grid>
            <Grid item>
              <LabSuccessButton>Setuju</LabSuccessButton>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

AdminTinjauRequestPage.title = "Tinjau Request";
AdminTinjauRequestPage.Layout = SimalabLayout;

export default AdminTinjauRequestPage;
