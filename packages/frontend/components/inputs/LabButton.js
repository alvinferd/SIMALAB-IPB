import { Divider, Button } from "@material-ui/core";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

function LabButton({
  children,
  variant = "contained",
  color = "primary",
  ...props
}) {
  return (
    <Button size="medium" variant={variant} color={color} {...props}>
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

export default LabButton;
export { LabButton, LabButtonDropdown };
