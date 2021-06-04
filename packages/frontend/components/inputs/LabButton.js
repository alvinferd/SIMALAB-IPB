import { Divider, Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

import CustomTheme from "@/themes/default";

function LabButton({
  children,
  variant = "contained",
  color = "primary",
  size = "medium",
  ...props
}) {
  return (
    <Button size={size} variant={variant} color={color} {...props}>
      {children}
    </Button>
  );
}

function LabButtonDropdown({ children }) {
  return (
    <Button
      variant="outlined"
      color="primary"
      endIcon={
        <>
          <Divider orientation="vertical" flexItem />
          <KeyboardArrowDownIcon />
        </>
      }
    >
      {children}
    </Button>
  );
}

const LabWarnButton = withStyles(() => ({
  root: {
    backgroundColor: CustomTheme.palette.error.main,
    "&:hover": {
      backgroundColor: CustomTheme.palette.error.main,
    },
  },
}))(LabButton);

const LabSuccessButton = withStyles(() => ({
  root: {
    backgroundColor: CustomTheme.palette.success.main,
    "&:hover": {
      backgroundColor: CustomTheme.palette.success.main,
    },
  },
}))(LabButton);

export default LabButton;
export { LabButton, LabButtonDropdown, LabSuccessButton, LabWarnButton };
