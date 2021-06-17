import { useEffect } from "react";
import Router from "next/router";
import moment from "moment";
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

import { useSelector } from "react-redux";
import { dispatch } from "@/utils/redux/store";
import { peminjamanGet } from "@/utils/redux/slice/peminjaman";
import { submisiGet } from "@/utils/redux/slice/submisiPeminjaman";

const convertToArray = (index, lab, date, status, id) => {
  return [index, lab, date, status, id];
};

const filteredSubmisi = (dataSubmisi) => {
  let arr = [];
  for (const i in dataSubmisi) {
    arr.push(
      convertToArray(
        Number(i) + 1,
        dataSubmisi[i].ruangan_id.ruangan,
        moment(dataSubmisi[i].date_peminjaman).format("ll"),
        dataSubmisi[i].Verifikasi ? "Disetujui" : "Ditinjau",
        dataSubmisi[i].id_form
      )
    );
  }
  return arr;
};
function AdminPinjamLabPage() {
  useEffect(() => {
    dispatch(peminjamanGet());
    dispatch(submisiGet());
  }, []);

  const dataSubmisi = useSelector((state) =>
    state.submisi.data.map((item) => ({
      ...item,
    }))
  );

  const dataPeminjaman = useSelector((state) =>
    state.peminjaman.data.map((item) => ({
      ...item,
    }))
  );

  return (
    <>
      <Grid container justify="space-between" spacing={8}>
        <Grid item xs={5}>
          <Typography variant="h3" component="h2">
            Form Peminjaman Lab
          </Typography>
          <Typography color="textSecondary">
            Lihat/ Edit form yang anda perlukan untuk peminjaman
          </Typography>
          <Box mt={1.5}>
            <Box mr={1} component="span">
              <LabButton
                color="primary"
                onClick={() => Router.push("/admin/pinjam-lab/form-peminjaman")}
              >
                Lihat form
              </LabButton>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={7}>
          <LabCard title="Request Peminjaman Lab dan Instrumen">
            <Grid container alignItems="center">
              <Grid item xs={4}>
                <Typography variant="body1">Belum dikonfirmasi</Typography>
                <Typography variant="h2" component="p">
                  {
                    dataSubmisi.filter((item) => item.Verifikasi === false)
                      .length
                  }
                </Typography>
                <Divider orientation="vertical" flexItem />
              </Grid>
              <Grid item xs={4}>
                <Typography variant="body1">Sudah dikonfirmasi</Typography>
                <Typography variant="h2" component="p">
                  {
                    dataSubmisi.filter((item) => item.Verifikasi === true)
                      .length
                  }
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography variant="body1">Semua</Typography>
                <Typography variant="h2" component="p">
                  {dataSubmisi.length}
                </Typography>
              </Grid>
            </Grid>
          </LabCard>
        </Grid>
      </Grid>
      <Grid container direction="column">
        <Box mt={1} mb={3}>
          <Typography variant="h3" component="h2">
            Jadwal Pemakaian Lab
          </Typography>
          <Typography variant="body1" component="p" color="textSecondary">
            Berikut jadwal pemakaian lab untuk lab biokimia medis
          </Typography>
        </Box>
        <Grid container spacing={8}>
          <Grid item style={{ minHeight: 72 }} xs={5}>
            <Calendar />
          </Grid>
          <Grid item xs={7}>
            <LabCard title="Semua">
              <LabTable
                column={ListTableColumnDummy}
                data={filteredSubmisi(dataSubmisi)}
                widthColumn={ListTableWidthColumn}
              />
            </LabCard>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

AdminPinjamLabPage.title = "Pinjam Lab";
AdminPinjamLabPage.Layout = SimalabLayout;
export default AdminPinjamLabPage;
