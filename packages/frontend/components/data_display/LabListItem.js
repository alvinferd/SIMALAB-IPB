import { ListItem, ListItemText, ListItemIcon } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CustomTheme from "@/themes/default";

const useStyles = makeStyles((theme) => ({
  menuRoot: {
    "&.Mui-selected": {
      backgroundColor: CustomTheme.palette.blue.dark,
      color: "#FFF",
      boxShadow: (0, 4, 4, "rgba(0, 0, 0, 0.25)"),
      borderRadius: theme.spacing(2),
    },
  },
  list: {
    display: "flex",
    justifyContent: "center",
    color: "#FFF",
    height: theme.spacing(6.5),
  },
  listIcon: {
    minWidth: 0,
    marginRight: theme.spacing(1.5),
  },
}));

function LabListItem({ text, icon, onClick, selected = false }) {
  const classes = useStyles();
  return (
    <ListItem
      className={classes.list}
      button
      key={text}
      classes={{
        root: classes.menuRoot,
      }}
      selected={selected}
    >
      <ListItemIcon className={classes.listIcon}>{icon}</ListItemIcon>
      <ListItemText primary={text} primaryTypographyProps={{ variant: "h3" }} />
    </ListItem>
  );
}

export default LabListItem;
