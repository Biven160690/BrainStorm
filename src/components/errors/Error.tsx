import { useStyles } from "../../theme/style";

export const Error = () => {
  const { error } = useStyles()

  return (
    <div className={error}>
      <h1> Error</h1>
      <h2> Please repeat again </h2>
    </div>
  );
};
