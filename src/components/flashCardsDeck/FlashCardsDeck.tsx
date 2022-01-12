import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { Add, Delete } from '@mui/icons-material';
import Grid from '@mui/material/Grid';

import { useStyles } from '../../theme/style'

function FlashCardsDeck() {
  const { flashCardsDeck, flashCardsDeckContext, flashCardsDeckActions} = useStyles()
    return (
      <Grid item xs={12} md={4}>
        <Card className={flashCardsDeck}>
          <CardContent className={flashCardsDeckContext}>
            <Typography gutterBottom variant="h5">
              Animals
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
            <Typography component='p' color="text.secondary">
              Total 10
            </Typography>
          </CardContent>
          <CardActions className={flashCardsDeckActions}>
            <IconButton color='success' aria-label='add card'>
              <Add />
            </IconButton>
            <IconButton color='error' aria-label='delete deck'>
              <Delete />
            </IconButton>
          </CardActions>
        </Card>
      </Grid>
    )
}

export default FlashCardsDeck
