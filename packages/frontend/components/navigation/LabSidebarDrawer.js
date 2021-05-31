import Image from "next/image";

import { Box, Drawer, Typography, Divider, List } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import LabListItem from "@/components/data_display/LabListItem";
import {
  ListItemSidebar,
  ListItemSidebarIcon,
} from "@/utils/list/ListItemSidebar";
import CustomTheme from "@/themes/default";

const drawerWidth = 280;
const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    backgroundColor: CustomTheme.palette.blue.light,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: CustomTheme.palette.blue.light,
  },
  labName: {
    width: "100%",
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),

    backgroundColor: CustomTheme.palette.blue.dark,
    color: "#FFF",
    textAlign: "center",
  },
  account: {
    display: "flex",
    alignItems: "center",
    margin: theme.spacing(1.5),
    height: theme.spacing(4.5),
    color: "#FFF",
  },
}));

function LabSidebarDrawer() {
  const classes = useStyles();
  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
      anchor="left"
    >
      <Box className={classes.labName}>
        <Typography variant="h2" component="h1">
          <strong>SIMALAB IPB</strong>
        </Typography>
      </Box>
      <Box className={classes.account}>
        <Image
          src="/images/LogoIPB.png"
          alt="Logo IPB University"
          width={36}
          height={36}
        />

        <Typography component="span" variant="body1" style={{ marginLeft: 12 }}>
          <b>##_USER_NAME</b>
        </Typography>
      </Box>
      <Box flexGrow={1} />
      <Box flex={1} flexDirection="column" height="100%" margin={1}>
        <List>
          {ListItemSidebar.map((text, index) => {
            return (
              <LabListItem
                text={text}
                icon={ListItemSidebarIcon[index]}
                selected={index === 0 ? true : false}
              />
            );
          })}
        </List>
      </Box>
      <Box flexGrow={1} />
    </Drawer>
  );
}

export default LabSidebarDrawer;
