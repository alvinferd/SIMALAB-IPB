import Image from "next/image";
import { Box, Grid, Chip, Divider, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { LabCardAlatInstrumen } from "@/components/surfaces/LabCard";
import LabCardPagination from "@/sections/LabCardPagination";
import LabButton from "@/components/inputs/LabButton";
import LabCard from "@/components/surfaces/LabCard";
import LabSearchField from "@/components/inputs/LabSearchField";

const useStyles = makeStyles((theme) => ({
  detailItem: {
    background: "#F7FAFF",
    border: "1px solid #E0E4EB",
    borderRadius: 8,
    padding: theme.spacing(1.5, 3.5),
  },
}));

function LabCariInventaris() {
  const classes = useStyles();
  const LabItem = () => {
    let kiri = [];
    let kanan = [];
    for (let i = 0; i < 6; i++) {
      if (i % 2)
        kiri.push(
          <LabCardAlatInstrumen
            title="Mikroskop"
            subtitle="Mikroskop Cahaya"
            jenis="Alat"
            image="/images/microscope.jpg"
          />
        );
      else
        kanan.push(
          <LabCardAlatInstrumen
            title="Mikroskop"
            subtitle="Mikroskop Cahaya"
            jenis="Alat"
            image="/images/microscope.jpg"
          />
        );
    }
    return { kiri, kanan };
  };
  return (
    <Box mt={4}>
      <Typography variant="h3" component="h2">
        Cari Inventaris
      </Typography>
      <Typography color="textSecondary">Cari inventaris di sini</Typography>

      <Grid container spacing={4}>
        <Grid item xs={6} style={{ marginTop: 16 }}>
          <Grid container spacing={2} style={{ marginLeft: 0 }}>
            <LabSearchField />
            <LabButton>Filter</LabButton>
            <Grid item xs={6}>
              {LabItem().kiri.map((item) => {
                return <Box mt={2}>{item}</Box>;
              })}
            </Grid>
            <Grid item xs={6}>
              {LabItem().kanan.map((item) => {
                return <Box mt={2}>{item}</Box>;
              })}
            </Grid>
            <LabCardPagination />
          </Grid>
        </Grid>

        <Grid item xs={6}>
          <LabCard title="Keterangan" noPadding>
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              p={2}
              pb={0}
              mb={2}
            >
              <Box position="relative" height={160} width={160}>
                <Image
                  src="/images/microscope.jpg"
                  alt="Mikroskop"
                  layout="fill"
                  objectFit="cover"
                />
              </Box>
              <Box textAlign="center" mt={2} mb={1}>
                <Typography variant="h4" component="p">
                  Mikroskop
                </Typography>
                <Typography variant="body1" component="p" color="textSecondary">
                  Mikroskop Cahaya
                </Typography>
              </Box>
              <Chip
                size="small"
                variant="outlined"
                color="primary"
                label="Alat"
              />
            </Box>
            <Grid container className={classes.detailItem}>
              <Grid
                container
                item
                xs={4}
                direction="column"
                justify="center"
                alignItems="center"
              >
                <Typography color="textSecondary">Kode barang</Typography>
                <Typography>24</Typography>
              </Grid>
              <Grid
                container
                item
                xs={4}
                direction="column"
                justify="center"
                alignItems="center"
              >
                <Typography color="textSecondary">Lab</Typography>
                <Typography>Mikrobiologi</Typography>
              </Grid>
              <Grid
                container
                item
                xs={4}
                direction="column"
                justify="center"
                alignItems="center"
              >
                <Typography color="textSecondary">Jumlah Stok</Typography>
                <Typography>4</Typography>
              </Grid>
            </Grid>
          </LabCard>
        </Grid>
      </Grid>
    </Box>
  );
}

export default LabCariInventaris;
