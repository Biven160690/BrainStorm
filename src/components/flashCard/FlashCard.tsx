import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import { Delete } from '@mui/icons-material';
import Grid from '@mui/material/Grid';

import { useStyles } from '../../theme/style'

function FlashCard() {
  const { flashCard, flashCardContext, flashCardAction } = useStyles()
    return (
      <Grid item xs={12} md={4}>
        <Card className={flashCard}>
          <CardContent className={flashCardContext}>
            <Typography gutterBottom variant="h5">
              Cat
            </Typography>
          </CardContent>
          <CardActions className={flashCardAction}>
            <Stack spacing={1}>
              <Rating name="half-rating" defaultValue={0} precision={0.5} />
            </Stack>
            <Box>
              <IconButton color='error' aria-label='delete card'>
                <Delete />
              </IconButton>
            </Box>
          </CardActions>
        </Card>
      </Grid>
    )
}

export default FlashCard
