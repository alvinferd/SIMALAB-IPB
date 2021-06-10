import React from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { LabCardAlatInstrumen } from "@/components/surfaces/LabCard";
import LabButton from "@/components/inputs/LabButton";
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
              {items.map((item, index) => {
                if (index % 2) {
                  return (
                    <>
                      <Box mt={2}>
                        <LabCardAlatInstrumen
                          key={item.title}
                          title={item.title}
                          subtitle={item.subtitle}
                          image={item.image}
                          jenis={item.jenis}
                        />
                      </Box>
                    </>
                  );
                }
              })}
            </Grid>
            <Grid item xs={6}>
              {items.map((item, index) => {
                if (!(index % 2)) {
                  return (
                    <>
                      <Box mt={2}>
                        <LabCardAlatInstrumen
                          key={item.title}
                          title={item.title}
                          subtitle={item.subtitle}
                          image={item.image}
                          jenis={item.jenis}
                        />
                      </Box>
                    </>
                  );
                }
              })}
            </Grid>
            <LabCardPagination />
          </Grid>
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
    </Box>
  );
}

export default LabCariInventaris;
