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
            <Typography variant="h2" component="h1">
              <b style={{ fontWeight: 700 }}>Pinjam Lab</b>
            </Typography>
            <Typography variant="body1" component="p" color="textSecondary">
              Selamat datang, lihat ketersediaaan Lab dengan pilih departemen
              dan pilih lab.
            </Typography>
          </Grid>
          <Box flexGrow={1} />
          <Grid item style={{ marginTop: 2 }}>
            <Button
              variant="outlined"
              color={CustomTheme.palette.error.main}
              size="small"
              disableElevation
            >
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
