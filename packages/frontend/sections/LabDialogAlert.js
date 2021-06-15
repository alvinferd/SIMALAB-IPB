import React from "react";
import { Box, Typography } from "@material-ui/core";

import LabButton from "@/components/inputs/LabButton";
import LabDialog from "@/components/feedback/LabDialog";

function LabDialogAlert() {
  return (
    <>
      <LabDialog>
        <Typography>This is alert</Typography>
      </LabDialog>
    </>
  );
}
