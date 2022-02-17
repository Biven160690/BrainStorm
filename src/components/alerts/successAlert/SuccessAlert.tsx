import { Alert, Snackbar } from "@mui/material";
import { StatusItem } from "../../../helper/interface";

interface SuccessAlertProps {
  status: StatusItem | undefined;
  isOpen: boolean;
  setIsOpen: (data: boolean) => void;
}

export const SuccessAlert = ({
  status,
  isOpen,
  setIsOpen,
}: SuccessAlertProps) => {
  const handleClose = () => setIsOpen(false);

  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      open={isOpen}
      autoHideDuration={2000}
      onClose={handleClose}
    >
      <Alert severity="success" sx={{ width: "100%" }} variant="filled">
        {status?.message}
      </Alert>
    </Snackbar>
  );
};
