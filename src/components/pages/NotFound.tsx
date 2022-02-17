import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";

import { useStyles } from "../../theme/style";

export const NotFound = () => {
  const { notFound, notFoundContext } = useStyles();

  return (
    <div className={notFound}>
      <Box className={notFoundContext}>
        <Typography variant="h2"> 404 - Not Found </Typography>
        <Typography variant="h6">
          <Link to="/">go home </Link>
        </Typography>
      </Box>
    </div>
  );
};
