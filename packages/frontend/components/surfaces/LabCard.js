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

import ButtonBase from "@material-ui/core/ButtonBase";
import { LabWarnButton } from "@/components/inputs/LabButton";
import LabButton from "@/components/inputs/LabButton";

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    maxHeight: "700px",
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
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
}));

function LabCard({
  children,
  title,
  margin = 8,
  noMargin = false,
  noPadding = false,
  ...props
}) {
  const classes = useStyles();
  margin = noMargin === true ? 0 : margin;
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
      <Box p={noPadding == true ? 0 : 2} pb={noPadding == true ? 0 : 3}>
        {children}
      </Box>
    </Card>
  );
}

function LabCardAlatInstrumen({ title, subtitle, jenis, image }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Card
        elevation={0}
        variant="outlined"
        style={{ border: "1px solid #2196F3" }}
      >
        <Box
          css={{
            float: "right",
            borderRadius: "0px 8px",
            outlineOffset: "1px",
            outline: "1px solid #2196F3",
            padding: "2px 12px",
            paddingTop: -2,
          }}
        >
          <div style={{ marginTop: "-4px" }}>
            <Typography variant="subtitle2" component="span" color="primary">
              <b>{jenis}</b>
            </Typography>
          </div>
        </Box>
        <Box mx={1} my={2} pt={1.5}>
          <Grid container justify="center" alignItems="center">
            <Grid
              item
              xs={5}
              style={{ position: "relative", width: 84, height: 63 }}
            >
              <Image src={image} alt={title} layout="fill" objectFit="cover" />
            </Grid>
            <Grid item xs={7}>
              <Typography variant="h4" component="p">
                {title}
              </Typography>
              <Typography
                variant="subtitle2"
                color="textSecondary"
                component="p"
              >
                {subtitle}
              </Typography>
              <LabButton size="small" style={{ marginTop: 4, fontSize: 11 }}>
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
        <CardHeader
          title={title}
          className={classes.header}
          titleTypographyProps={{ variant: "h4", component: "h4" }}
        />
        <Grid container spacing={2} justify="center" alignItems="center">
          <Grid item xs={3}>
            <ButtonBase className={classes.image}>
              <img
                className={classes.img}
                alt="complex"
                src="/images/microscope.jpg"
              />
            </ButtonBase>
          </Grid>
          <Grid
            item
            xs={3}
            container
            direction="column"
            alignItems="center"
            spacing={2}
          >
            <Typography variant="h4" component="p">
              Mikroskop
            </Typography>
            <Typography variant="subtitle2" color="textSecondary" component="p">
              Mikroskop cahaya
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <ButtonBase className={classes.image}>
              <img
                className={classes.img}
                alt="complex"
                src="/static/images/grid/complex.jpg"
              />
            </ButtonBase>
          </Grid>
          <Box mx={2} className={classes.button}>
            <Grid item xs={3}>
              <LabWarnButton size="small">Hapus</LabWarnButton>
            </Grid>
          </Box>
        </Grid>
      </Card>
    </div>
  );
}
export default LabCard;
export { LabCard, LabCardAlatInstrumen, LabCardRequestAlat };
