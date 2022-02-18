import { Typography, Box } from "@mui/material";

import { useStyles } from "../../theme/style";

export const Footer = () => {
  const { footer, footerContext } = useStyles();

  return (
    <footer className={footer}>
      <Box className={footerContext}>
        <Typography component="p" color="text.secondary" role="paragraph">
          © {new Date().getFullYear()}
        </Typography>
      </Box>
    </footer>
  );
};
