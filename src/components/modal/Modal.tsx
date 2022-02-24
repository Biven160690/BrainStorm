import { Box, Dialog, DialogActions, DialogTitle } from "@mui/material";

import { useStyles } from "../../theme/style";

type ModalProps = {
  header: string;
  handleClickGoBack: () => void;
  isOpenModal: boolean
  children: React.ReactNode;
};

export function Modal({ header, handleClickGoBack, isOpenModal, children }: ModalProps) {
  const { formTitle } = useStyles();

  return (
    <Box>
      <Dialog open={isOpenModal} onClose={handleClickGoBack}>
        <DialogTitle className={formTitle}>{header}</DialogTitle>
        <DialogActions>{children}</DialogActions>
      </Dialog>
    </Box>
  );
}
