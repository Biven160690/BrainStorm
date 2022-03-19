import { useForm } from 'react-hook-form';

import { FormsInputs } from './FormsInputs';
import { FormsButtons } from './FormsButtons';

import { NewCard } from '../../type';

interface AddCardFormProps {
  onSubmit: (data: NewCard) => void;
}

export function AddCardForm({ onSubmit }: AddCardFormProps) {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<NewCard>();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormsInputs control={control} errors={errors} />
      <FormsButtons />
    </form>
  );
}
