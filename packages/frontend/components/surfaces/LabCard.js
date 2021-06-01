import { Card, CardContent, CardHeader } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CustomTheme from "@/themes/default";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  header: {
    backgroundColor: CustomTheme.palette.blue.main,
    color: "#FFF",
  },
}));

function LabCard({ children, title, margin = 8 }) {
  const classes = useStyles();
  return (
    <Card className={classes.root} elevation={3} style={{ marginTop: margin }}>
      <CardHeader
        title={title}
        className={classes.header}
        titleTypographyProps={{ variant: "h3", component: "h3" }}
      />
      <CardContent>{children}</CardContent>
    </Card>
  );
}

export default LabCard;
