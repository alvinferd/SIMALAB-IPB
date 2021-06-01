import { ListItem, ListItemText, ListItemIcon } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CustomTheme from "@/themes/default";

const useStyles = makeStyles((theme) => ({
  menuRoot: {
    "&.Mui-selected": {
      backgroundColor: CustomTheme.palette.blue.dark,
      color: "#FFF",
      boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      borderRadius: theme.spacing(2),
    },
  },
  menuButton: {
    padding: `${theme.spacing(0.5)} ${theme.spacing(3)}`,
    marginBottom: 12,
    color: "#fff",
    "&:hover": {
      borderRadius: theme.spacing(2),
    },
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
        button: classes.menuButton,
      }}
      selected={selected}
    >
      <ListItemIcon className={classes.listIcon}>{icon}</ListItemIcon>
      <ListItemText primary={text} primaryTypographyProps={{ variant: "h3" }} />
    </ListItem>
  );
}

export default LabListItem;
