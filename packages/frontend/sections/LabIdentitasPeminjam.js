import { Grid } from "@material-ui/core";

import LabFormField from "@/components/inputs/LabFormField";

function LabFormPeminjaman() {
  return (
    <Grid container spacing={4}>
      <Grid item xs={6}>
        <LabFormField title="Nama" readOnly={true} />
        <LabFormField title="Status" readOnly={true} />
        <LabFormField title="Lab yang ingin dipinjam" readOnly={true} />
      </Grid>
      <Grid item xs={6}>
        <LabFormField title="NIM/NIP" readOnly={true} />
        <LabFormField title="Departemen" readOnly={true} />
        <LabFormField title="Tanggal Peminjaman" readOnly={true} />
      </Grid>
    </Grid>
  );
}

export default LabFormPeminjaman;
