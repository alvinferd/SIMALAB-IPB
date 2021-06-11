import React from "react";
import { Box, Typography } from "@material-ui/core";

import LabButton from "@/components/inputs/LabButton";
import LabDialog from "@/components/feedback/LabDialog";

function LabDialogSimpan({ open, onClick, onClose }) {
  return (
    <>
      <LabDialog title="Pemberitahuan" onClose={onClose} open={open}>
        <Typography variant="body1">
          Setelah anda menekan tombol <strong>'simpan'</strong> maka segala
          bentuk perubahan yang tertera di pratinjau akan dipublikasikan
        </Typography>
        <Box mt={2} component={LabButton} onClick={onClick}>
          Simpan
        </Box>
      </LabDialog>
    </>
  );
}

export default LabDialogSimpan;
