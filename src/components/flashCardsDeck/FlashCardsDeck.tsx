import { Link, useMatch } from 'react-router-dom'
import { Add, Delete } from '@mui/icons-material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import { CardActionArea } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import { useStyles } from '../../theme/style';
import { Decks } from '../../hooks/interface';

import { ADD_CARD_FORM, DELETE_DECK_FORM } from '../constants';


function FlashCardsDeck({ id, title, description, cards }: Decks) {
  const { flashCardsDeck, flashCardsDeckContext, flashCardsDeckActions } = useStyles()

  const match = useMatch('/')

  const addItem = match ? `${ADD_CARD_FORM}/deck/${id}` : `${ADD_CARD_FORM}/deck/${id}`
  
  const deleteItem = match ? `${DELETE_DECK_FORM}/deck/${id}` : `${DELETE_DECK_FORM}/deck/${id}`

  const cardsTotal = cards.length

  return (
    <Grid item xs={12} md={4} >
      <Card className={flashCardsDeck}>
        <CardActionArea>
          <Link to={`/deck/${id}`} >
            <CardContent className={flashCardsDeckContext} >
              <Typography gutterBottom variant="h5">
                {title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {description}
              </Typography>
              <Typography component='p' color="text.secondary">
                Total: {cardsTotal}
              </Typography>
            </CardContent>
          </Link>
        </CardActionArea>
        <CardActions className={flashCardsDeckActions}>
          <IconButton color='success' component={Link} to={addItem} state={{ open: true }} aria-label='add card' >
            <Add />
          </IconButton>
          <IconButton color='error' aria-label='delete deck' component={Link} to={deleteItem} state={{ open: true }}>
            <Delete />
          </IconButton>
        </CardActions>
      </Card>
    </Grid>
  )
}

export default FlashCardsDeck
