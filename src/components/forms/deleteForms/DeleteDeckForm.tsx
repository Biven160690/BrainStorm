import React from 'react';

import { FormsButtons } from './FormsButtons';

interface DeleteDeckFormProps {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export const DeleteDeckForm = ({ handleSubmit }: DeleteDeckFormProps) => {
  return (
    <form onSubmit={handleSubmit}>
      <FormsButtons />
    </form>
  );
};
