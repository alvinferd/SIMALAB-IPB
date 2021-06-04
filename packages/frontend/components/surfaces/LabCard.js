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

import LabButton from "@/components/inputs/LabButton";

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
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
  );
}

export default LabCard;
export { LabCard, LabCardAlatInstrumen };
