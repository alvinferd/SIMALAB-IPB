import Link from "next/link";

import React, { useEffect } from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { LabCard, LabCardAlatInstrumen } from "@/components/surfaces/LabCard";
import { LabButton, LabWarnButton } from "@/components/inputs/LabButton";
import LabSearchField from "@/components/inputs/LabSearchField";

import LabCardPagination from "@/sections/LabCardPagination";
import LabCardInventaris from "@/sections/LabCardInventaris";

const useStyles = makeStyles((theme) => ({
  detailItem: {
    background: "#F7FAFF",
    border: "1px solid #E0E4EB",
    borderRadius: 8,
    padding: theme.spacing(1.5, 3.5),
  },
}));

function LabCariInventaris({ items }) {
  const [selectedInventaris, setSelectedInventaris] = React.useState(null);

  const handleButtonKeterangan = (_event, index) => {
    setSelectedInventaris(items[index]);
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
            <Grid container item xs={12} spacing={1} style={{ marginTop: 16 }}>
              {items.map((item, index) => {
                return (
                  <Grid item xs={6}>
                    <LabCardAlatInstrumen
                      key={item.NamaAlat}
                      title={item.NamaAlat}
                      subtitle={item.NamaAlat}
                      image={item.gambarAlat}
                      jenis={item.kategori_id.Kategori}
                      button="Keterangan"
                      onButtonClick={(event) =>
                        handleButtonKeterangan(event, index)
                      }
                    />
                  </Grid>
                );
              })}
            </Grid>
            <LabCardPagination />
          </Grid>
        </Grid>

        <Grid item xs={6}>
          {selectedInventaris === null ? (
            <LabCard title="Keterangan">
              <Typography>Belum ada alat yang dipilih.</Typography>
            </LabCard>
          ) : (
            <LabCardInventaris
              title={selectedInventaris.NamaAlat}
              subtitle={selectedInventaris.NamaAlat}
              src={selectedInventaris.gambarAlat}
              type={selectedInventaris.kategori_id.Kategori}
              code={24}
              lab={selectedInventaris.lab_id.ruangan}
              stock={selectedInventaris.Quantity}
            />
          )}

          <Box
            component={Grid}
            mt={2}
            container
            direction="row"
            justify="flex-end"
          >
            <Grid item>
              <LabWarnButton>Hapus</LabWarnButton>
            </Grid>
            <div style={{ marginLeft: 8 }} />
            <Grid item>
              <LabButton>
                <Link
                  href={
                    selectedInventaris === null
                      ? ""
                      : {
                          pathname: "inventaris/edit-inventaris",
                          query: { id: selectedInventaris.id_alat },
                        }
                  }
                >
                  Edit
                </Link>
              </LabButton>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default LabCariInventaris;
