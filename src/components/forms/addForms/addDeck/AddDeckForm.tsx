import { useForm } from 'react-hook-form';

import { FormsInputs } from './FormsInputs';
import { FormsButtons } from '../addCard/FormsButtons';

import { NewDeck } from '../../type';

interface AddDeckFormProps {
  onSubmit: (data: NewDeck) => void;
}

export function AddDeckForm({ onSubmit }: AddDeckFormProps) {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<NewDeck>();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormsInputs control={control} errors={errors} />
      <FormsButtons />
    </form>
  );
}
