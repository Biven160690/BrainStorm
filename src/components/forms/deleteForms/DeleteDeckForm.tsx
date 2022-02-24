import { Button } from "@mui/material";

type DeleteDeckFormProps = {
  handleClickGoBack: () => void;
  onSubmit: () => void;
};

type handleSubmitProps = (e: React.FormEvent<HTMLFormElement>) => void;

export const DeleteDeckForm = ({
  handleClickGoBack,
  onSubmit,
}: DeleteDeckFormProps) => {
  
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
