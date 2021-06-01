import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

import { Box, Grid, Divider, Typography } from "@material-ui/core";

import SimalabLayout from "@/layouts/default";
import LabTable from "@/components/data_display/LabTable";
import LabCard from "@/components/surfaces/LabCard";
import { LabButton } from "@/components/inputs/LabButton";
import {
  ListTableDummy,
  ListTableColumnDummy,
  ListTableWidthColumn,
} from "@/utils/dummy/ListTableAdminDashboard";

function Index() {
  const [departemenState, setDepartemenState] = useState(0);
  useEffect(() => {
    console.log("Departemen State:", departemenState);
  }, [departemenState]);

  return (
    <>
      <Grid container justifyContent="space-between" spacing={8}>
        <Grid item xs={4}>
          <Typography variant="h3" component="h2">
            Depatemen Anda
          </Typography>
          <Box mt={1.5}>
            <Box mr={1} component="span">
              <LabButton color="primary">Biologi</LabButton>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={8}>
          <LabCard title="Request Peminjaman Lab dan Instrumen">
            <Grid container alignItems="center">
              <Grid item xs={4}>
                <Typography variant="body1">Belum dikonfirmasi</Typography>
                <Typography variant="h2" component="p">
                  6
                </Typography>
                <Divider orientation="vertical" flexItem />
              </Grid>
              <Grid item xs={4}>
                <Typography variant="body1">Sudah dikonfirmasi</Typography>
                <Typography variant="h2" component="p">
                  8
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography variant="body1">Semua</Typography>
                <Typography variant="h2" component="p">
                  12
                </Typography>
              </Grid>
            </Grid>
          </LabCard>
        </Grid>
      </Grid>
      <Grid container direction="column">
        <Box mt={5} mb={3}>
          <Typography variant="h3" component="h2">
            Jadwal Pemakaian Lab
          </Typography>
          <Typography variant="body1" component="p" color="textSecondary">
            Berikut jadwal pemakaian lab untuk lab biokimia medis
          </Typography>
        </Box>
        <Grid container spacing={8}>
          <Grid item style={{ minHeight: 72 }} xs={4}>
            <Calendar />
          </Grid>
          <Grid item xs={8}>
            <LabCard title="Semua">
              <LabTable
                column={ListTableColumnDummy}
                data={ListTableDummy}
                widthColumn={ListTableWidthColumn}
              />
            </LabCard>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
Index.Layout = SimalabLayout;
export default Index;
