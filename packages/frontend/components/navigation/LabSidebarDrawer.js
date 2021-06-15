import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { Box, Drawer, Typography, Divider, List } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { useSelector } from "react-redux";

import LabListItem from "@/components/data_display/LabListItem";
import {
  ListItemSidebar,
  ListItemSidebarIcon,
  ListItemSidebarLink,
} from "@/utils/list/ListItemSidebar";
import CustomTheme from "@/themes/default";

const drawerWidth = 252;
const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
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
  const router = useRouter();
  const userName = useSelector((state) => state.user.current.username);

  const [selectedRoute, setSelectedRoute] = useState(router.pathname);
  useEffect(() => {
    console.log(router.pathname.split("/")[1]);
  }, [selectedRoute]);

  const handleListItemClick = (_event, item) => {
    setSelectedRoute(item);
    router.replace(item);
  };

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
          <b>{!userName ? "A User" : userName}</b>
        </Typography>
      </Box>
      <Box flexGrow={1} />
      <Box flex={1} flexDirection="column" height="100%" margin={1}>
        <List>
          {ListItemSidebar.map((text, index) => {
            return (
              <LabListItem
                key={index}
                text={text}
                icon={ListItemSidebarIcon[index]}
                onClick={(event) =>
                  handleListItemClick(
                    event,
                    ListItemSidebarLink(router.pathname.split("/")[1])[index]
                  )
                }
                selected={
                  selectedRoute ===
                  ListItemSidebarLink(router.pathname.split("/")[1])[index]
                }
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
export { LabSidebarDrawer, drawerWidth };
