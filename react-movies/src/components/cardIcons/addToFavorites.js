import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import { ActorsContext } from "../../contexts/actorsContext";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";

const AddToFavoritesIcon = ({ movie, actor }) => {
  const moviesContext = useContext(MoviesContext);
  const actorsContext = useContext(ActorsContext);

  const handleAddToFavorites = (e) => {
    e.preventDefault();
    if (movie) { //CHANGES FOR MOVIE OR ACTOR
      moviesContext.addToFavorites(movie);
    } else if (actor) {
      actorsContext.addToFavorites(actor);
    }
  };

  return (
    <IconButton aria-label="add to favorites" onClick={handleAddToFavorites}>
      <FavoriteIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddToFavoritesIcon;