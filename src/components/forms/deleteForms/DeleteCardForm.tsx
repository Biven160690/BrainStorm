import React from 'react';

import { FormsButtons } from './FormsButtons';

interface DeleteCardFormProps {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export const DeleteCardForm = ({ handleSubmit }: DeleteCardFormProps) => {
  return (
    <form onSubmit={handleSubmit}>
      <FormsButtons />
    </form>
  );
};
