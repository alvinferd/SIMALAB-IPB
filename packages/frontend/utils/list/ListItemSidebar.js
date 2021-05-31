import { Icon } from "@iconify/react";
import labFlask from "@iconify/icons-entypo/lab-flask";
import microscopeIcon from "@iconify/icons-fa-solid/microscope";

const ListItemSidebar = ["Pinjam Lab", "Inventaris"];
const ListItemSidebarIcon = [
  <Icon icon={labFlask} style={{ fontSize: 32, color: "#FFF" }} />,
  <Icon icon={microscopeIcon} style={{ fontSize: 32, color: "#FFF" }} />,
];

export default ListItemSidebar;
export { ListItemSidebar, ListItemSidebarIcon };
