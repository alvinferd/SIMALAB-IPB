import { useRouter } from "next/router";
import Router from "next/router";

import {
  Grid,
  Container,
  Box,
  Button,
  Typography,
  Divider,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CustomTheme from "@/themes/default";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    paddingTop: theme.spacing(3),
    flexGrow: 1,
  },
  divider: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
}));

function LabTopbar() {
  const classes = useStyles();
  const router = useRouter();
  const title = router.pathname.split("/")[2].replace("-", " ");

  return (
    <div className={classes.root}>
      <Container>
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
        >
          <Grid item>
            <Typography
              variant="h1"
              component="h1"
              style={{ textTransform: "capitalize" }}
            >
              <b>{title}</b>
            </Typography>
            <Typography variant="body1" component="p" color="textSecondary">
              {title === "inventaris"
                ? "Selamat datang, lihat ketersediaaan inventaris di laboratorium tujuanmu!"
                : "Selamat datang, lihat ketersediaaan Lab dengan pilih departemen dan pilih lab."}
            </Typography>
          </Grid>
          <Box flexGrow={1} />
          <Grid item style={{ marginTop: 2 }}>
            <Button variant="outlined" size="small" onClick={() => Router.push("/Login/login")} disableElevation >
              Keluar
            </Button>
          </Grid>
        </Grid>
      </Container>
      <Divider className={classes.divider} />
    </div>
  );
}

export default LabTopbar;
