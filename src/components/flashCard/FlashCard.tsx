import { useState } from "react";
import { Link } from "react-router-dom";
import ReactCardFlip from "react-card-flip";
import {
  Box,
  Card as Cards,
  CardActionArea,
  CardActions,
  CardContent,
  Grid,
  Typography,
  Rating,
  Stack,
  IconButton,
} from "@mui/material";
import { Delete } from "@mui/icons-material";

import { useStyles } from "../../theme/style";

import { Card } from "../../hooks/interface";

export function FlashCard({ id, translation, ...rest }: Card) {
  const [isFlipped, setIsFlipped] = useState<boolean>(false);

  const {
    flashCard,
    flashCardContext,
    flashCardAction,
    flashCardDeleteButton,
  } = useStyles();

  const handleClick = () => setIsFlipped((prevState) => !prevState);

  return (
    <Grid item xs={12} md={4} role="gridcell">
      <ReactCardFlip isFlipped={isFlipped}>
        <Cards className={flashCard}>
          <CardActionArea onClick={handleClick}>
            <CardContent className={flashCardContext}>
              <Typography gutterBottom variant="h5">
                {rest["new word"]}
              </Typography>
            </CardContent>
            <CardActions className={flashCardAction}>
              <Stack spacing={1}>
                <Rating name="half-rating" defaultValue={0} precision={0.5} />
              </Stack>
            </CardActions>
          </CardActionArea>
          <Box className={flashCardDeleteButton}>
            <IconButton
              color="error"
              aria-label="delete card front side"
              component={Link}
              to={`${"delete-card"}/${id}`}
              state={{ open: true, selectedItem: rest["new word"] }}
            >
              <Delete />
            </IconButton>
          </Box>
        </Cards>

        <Cards className={flashCard}>
          <CardActionArea onClick={handleClick}>
            <CardContent className={flashCardContext}>
              <Typography gutterBottom variant="h5">
                {translation}
              </Typography>
            </CardContent>
            <CardActions className={flashCardAction}>
              <Stack spacing={1}>
                <Rating name="half-rating" defaultValue={0} precision={0.5} />
              </Stack>
            </CardActions>
          </CardActionArea>
          <Box className={flashCardDeleteButton}>
            <IconButton
              color="error"
              aria-label="delete card back side"
              component={Link}
              to={`${"delete-card"}/${id}`}
              state={{ open: true, selectedItem: translation }}
            >
              <Delete />
            </IconButton>
          </Box>
        </Cards>
      </ReactCardFlip>
    </Grid>
  );
}
