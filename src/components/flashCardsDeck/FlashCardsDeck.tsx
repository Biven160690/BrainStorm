import { Link } from "react-router-dom";
import { Add, Delete } from "@mui/icons-material";
import {
  Card,
  CardActions,
  CardActionArea,
  CardContent,
  Grid,
  Typography,
  IconButton,
} from "@mui/material";

import { useStyles } from "../../theme/style";

import { Deck } from "../../hooks/interface";

export function FlashCardsDeck({ id, title, description, cards }: Deck) {
  const { flashCardsDeck, flashCardsDeckContext, flashCardsDeckActions } =
    useStyles();

  const addItem = `${"add-card"}/deck/${id}`;

  const deleteItem = `${"delete-deck"}/deck/${id}`;

  const cardsTotal = cards.length;

  return (
    <Grid item xs={12} md={4} role="gridcell">
      <Card className={flashCardsDeck}>
        <CardActionArea>
          <Link to={`/deck/${id}`}>
            <CardContent className={flashCardsDeckContext}>
              <Typography gutterBottom variant="h5">
                {title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {description}
              </Typography>
              <Typography component="p" color="text.secondary">
                Total: {cardsTotal}
              </Typography>
            </CardContent>
          </Link>
        </CardActionArea>
        <CardActions className={flashCardsDeckActions}>
          <IconButton
            color="success"
            aria-label="add card"
            component={Link}
            to={addItem}
            state={{ open: true, selectedItem: title }}
          >
            <Add />
          </IconButton>
          <IconButton
            color="error"
            aria-label="delete deck"
            component={Link}
            to={deleteItem}
            state={{ open: true, selectedItem: title }}
          >
            <Delete />
          </IconButton>
        </CardActions>
      </Card>
    </Grid>
  );
}

