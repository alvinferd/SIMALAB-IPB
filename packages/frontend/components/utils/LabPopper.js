import { Fade, Popper, Paper, Box } from "@material-ui/core";

function LabPopper({ open, anchorEl, children, ...props }) {
  return (
    <>
      <Popper
        open={open}
        anchorEl={anchorEl}
        placement="bottom-start"
        transition
        {...props}
        style={{ marginTop: 8 }}
      >
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Paper>{children}</Paper>
          </Fade>
        )}
      </Popper>
    </>
  );
}

export default LabPopper;
