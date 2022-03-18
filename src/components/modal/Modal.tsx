import React from 'react';

import { Box, Dialog } from '@mui/material';

interface ModalProps {
  isOpenModal: boolean;
  children: React.ReactNode;
}

export const Modal = ({ isOpenModal, children }: ModalProps) => {
  return (
    <Box>
      <Dialog open={isOpenModal}>{children}</Dialog>
    </Box>
  );
};
