import { useStyles } from "../../theme/style";

import { StatusItem } from "../../helper/interface";

type ErrorsProp = ( { hasError }: { hasError?: StatusItem | undefined} ) => JSX.Element

export const Error: ErrorsProp = ({ hasError }) => {
  const { error } = useStyles()

  const errorMessage = hasError?.message 

  return (
    <div className={error}>
      <h1> Error </h1>
      <h2> {errorMessage || 'Oops, something went wrong! Please repeat again'}  </h2>
    </div>
  );
};
