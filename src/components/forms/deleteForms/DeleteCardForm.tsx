import { Button } from "@mui/material";

type DeleteCardFormProps = {
  handleClickGoBack: () => void;
  onSubmit: () => void;
};

type handleSubmitProps = (e: React.FormEvent<HTMLFormElement>) => void;

export const DeleteCardForm = ({
  handleClickGoBack,
  onSubmit,
}: DeleteCardFormProps) => {
  
  const handleSubmit: handleSubmitProps = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit}>
      <Button type="button" color="primary" onClick={handleClickGoBack}>
        Cancel
      </Button>
      <Button type="submit" color="error">
        Delete
      </Button>
    </form>
  );
};
