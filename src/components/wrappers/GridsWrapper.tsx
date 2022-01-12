import Grid from '@mui/material/Grid';
import { GridsWrapperProps } from '../types/type'

function GridsWrapper({ children }: GridsWrapperProps) {
  return (
    <Grid container spacing={2}>
      {children}
    </Grid>
  )
}

export default GridsWrapper
