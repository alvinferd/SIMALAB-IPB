import SimalabLayout from "@/layouts/default";
import { Typography } from "@material-ui/core";

function AdminInventarisPage() {
  return (
    <>
      <Typography variant="h3" component="h2">
        Jadwal Pemakaian Lab
      </Typography>
      <Typography color="textSecondary">
        Berikut jadwal pemakaian lab untuk lab biokimia medis
      </Typography>
    </>
  );
}

AdminInventarisPage.title = "Inventaris";
AdminInventarisPage.Layout = SimalabLayout;

export default AdminInventarisPage;
