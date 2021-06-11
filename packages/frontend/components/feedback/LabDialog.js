import { Dialog, IconButton } from "@material-ui/core";

import CloseIcon from "@material-ui/icons/Close";

import LabCard from "@/components/surfaces/LabCard";

function LabDialog({ title, onClose, open, children }) {
  return (
    <Dialog
      onClose={onClose}
      aria-labelledby="dialog-alert"
      open={open}
      maxWidth="xs"
    >
      <LabCard
        margin={0}
        title={title}
        action={
          <IconButton
            aria-label="Close"
            onClick={onClose}
            style={{ color: "#fff" }}
          >
            <CloseIcon />
          </IconButton>
        }
      >
        {children}
      </LabCard>
    </Dialog>
  );
}

export default LabDialog;
