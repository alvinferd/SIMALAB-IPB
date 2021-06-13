import { useRouter } from "next/router";
import { Button, Grid, Typography, Box } from "@material-ui/core";
import { ListRequestItemDummy } from "@/utils/dummy/ListItemsInventaris";

import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";

import LabCard from "@/components/surfaces/LabCard";
import LabFormPeminjaman from "@/sections/LabFormPeminjaman";
import LabPeminjamanAlat from "@/sections/LabPeminjamanAlatInstrumen";
import SimalabLayout from "@/layouts/default";
import useStyles from "../../admin/pinjam-lab/form-peminjaman"

const requestPeminjamanUser = () => {
    const classes = useStyles();
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
                            Form Peminjaman
                        </Typography>
                    </Grid>
                </Grid>
            </Button>
            <Grid container spacing={5} className={classes.containerForm}>
                <Grid item xs={12}>
                    <Box className={classes.textField}>
                        <Typography variant="body1" component="p" color="textSecondary">
                            Silahkan melengkapi form peminjaman berikut untuk meminjam laboratorium
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <LabCard title="Peminjaman Alat Instrumen ">
                        <LabPeminjamanAlat items={ListRequestItemDummy} />
                    </LabCard>
                </Grid>
                <Grid item xs={6}>
                    <LabCard title="Form Peminjaman">
                        <LabFormPeminjaman />
                    </LabCard>
                </Grid>
            </Grid>
        </>
    )
}

requestPeminjamanUser.title = "Pinjam Lab";
requestPeminjamanUser.Layout = SimalabLayout;
export default requestPeminjamanUser

