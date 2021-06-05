import Image from "next/image";
import {
  Grid,
  Box,
  Card,
  CardContent,
  CardHeader,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CustomTheme from "@/themes/default";

import ButtonBase from '@material-ui/core/ButtonBase';
import { LabWarnButton } from "@/components/inputs/LabButton";
import LabButton from "@/components/inputs/LabButton";

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    maxHeight: '700px',
  },
  header: {
    backgroundColor: CustomTheme.palette.blue.main,
    color: "#FFF",
  },
  cardInstrumen: {
    ".MuiCardContent-root": {
      padding: 8,
    },
  },
  image: {
    width: 96,
    height: 96,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

function LabCard({ children, title, margin = 8, ...props }) {
  const classes = useStyles();
  return (
    <Card
      className={classes.root}
      elevation={3}
      style={{ marginTop: margin }}
      {...props}
    >
      <CardHeader
        title={title}
        className={classes.header}
        titleTypographyProps={{ variant: "h3", component: "h3" }}
      />
      <CardContent>{children}</CardContent>
    </Card>
  );
}

function LabCardAlatInstrumen() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Card elevation={0} variant="outlined">
        <Box mx={1} my={2}>
          <Grid container justify="center" alignItems="center">
            <Grid item xs={5}>
              <Image
                src="/images/microscope.jpg"
                alt="Mikroskop"
                width={84}
                height={63}
              />
            </Grid>
            <Grid item xs={7}>
              <Typography variant="h4" component="p">
                Mikroskop
              </Typography>
              <Typography variant="subtitle2" color="textSecondary" component="p">
                Mikroskop cahaya
              </Typography>
              <LabButton size="small" style={{ marginTop: 4 }}>
                Keterangan
              </LabButton>
            </Grid>
          </Grid>
        </Box>
      </Card>
    </div>
  );
}

function LabCardRequestAlat({ title, margin = 8 }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Card elevation={0} variant="outlined" style={{ marginTop: margin }}>
        <CardHeader title={title} className={classes.header} titleTypographyProps={{ variant: "h4", component: "h4" }} />
        <Grid container spacing={2} justify="center" alignItems="center">
          <Grid item xs={3}>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src="/images/microscope.jpg" />
            </ButtonBase>
          </Grid>
          <Grid item xs={3} container direction="column" alignItems="center" spacing={2}>
            <Typography variant="h4" component="p">
              Mikroskop
            </Typography>
            <Typography variant="subtitle2" color="textSecondary" component="p">
              Mikroskop cahaya
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src="/static/images/grid/complex.jpg" />
            </ButtonBase>
          </Grid>
          <Box mx={2} className={classes.button}>
            <Grid item xs={3}>
              <LabWarnButton size="small">
                Hapus
              </LabWarnButton>
            </Grid>
          </Box>
        </Grid>
      </Card>
    </div>
  )
}
export default LabCard;
export { LabCard, LabCardAlatInstrumen, LabCardRequestAlat };
