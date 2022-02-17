import { Alert, Snackbar } from "@mui/material";

import { AlertProps } from '../../../hooks/interface'
 
export const ErrorAlert = ({ status, isOpen, setIsOpen }: AlertProps) => {
  const handleClose = () => setIsOpen(false);

  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      open={isOpen}
      autoHideDuration={2000}
      onClose={handleClose}
    >
      <Alert severity="error" sx={{ width: "100%" }} variant="filled">
        {status?.message}
      </Alert>
    </Snackbar>
  );
};
