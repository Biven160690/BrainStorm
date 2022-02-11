import { useState } from "react";
import { Link } from "react-router-dom";
import ReactCardFlip from 'react-card-flip';
import Box from "@mui/material/Box";
import { Card as Cards, CardActionArea } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { Delete } from "@mui/icons-material";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";

import { useStyles } from "../../theme/style";
import { Card } from "../../hooks/interface";

import { DELETE_CARD_FORM } from '../constants';

function FlashCard({ id, translation, ...rest }: Card) {
  const [isFlipped, setIsFlipped] = useState<boolean>(false)
  
  const { flashCard, flashCardContext, flashCardAction, flashCardDeleteButton } = useStyles();

  const handleClick = () => setIsFlipped(prevState => !prevState)

  return (
    <Grid item xs={12} md={4}>
      <ReactCardFlip isFlipped={isFlipped}>
        <Cards className={flashCard}>
          <CardActionArea onClick={handleClick}>
            <CardContent className={flashCardContext} >
              <Typography gutterBottom variant="h5">
                {rest['new word']}
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
              aria-label="delete card"
              component={Link}
              to={`${DELETE_CARD_FORM}/${id}`}
              state={{ open: true }}
            >
              <Delete />
            </IconButton>
          </Box>
        </Cards>

        <Cards className={flashCard}>
          <CardActionArea onClick={handleClick}>
            <CardContent className={flashCardContext} >
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
              aria-label="delete card"
              component={Link}
              to={`${DELETE_CARD_FORM}/${id}`}
              state={{ open: true }}
            >
              <Delete />
            </IconButton>
          </Box>
        </Cards>
      </ReactCardFlip>
    </Grid>
  );
}

export default FlashCard;
