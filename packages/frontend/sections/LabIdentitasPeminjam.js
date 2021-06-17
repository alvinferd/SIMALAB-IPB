import { Grid } from "@material-ui/core";

import LabFormField from "@/components/inputs/LabFormField";

function LabFormPeminjaman({ data }) {
  return (
    <Grid container spacing={4}>
      <Grid item xs={6}>
        <LabFormField title="Nama" readOnly={true} value={data.name} />
        <LabFormField title="Status" readOnly={true} value={data.status} />
        <LabFormField
          title="Lab yang ingin dipinjam"
          readOnly={true}
          value={data.lab}
        />
      </Grid>
      <Grid item xs={6}>
        <LabFormField title="NIM/NIP" readOnly={true} value={data.nim} />
        <LabFormField
          title="Departemen"
          readOnly={true}
          value={data.departemen}
        />
        <LabFormField
          title="Tanggal Peminjaman"
          readOnly={true}
          value={data.date}
        />
      </Grid>
    </Grid>
  );
}

export default LabFormPeminjaman;
