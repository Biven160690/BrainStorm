import Grid from '@mui/material/Grid';

import { GridsWrapperProps } from './type';

function GridsWrapper({ children }: GridsWrapperProps) {
  return (
    <Grid container spacing={2}>
      {children}
    </Grid>
  )
}

export default GridsWrapper
