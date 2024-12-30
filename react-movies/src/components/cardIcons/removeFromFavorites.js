import React, { useContext } from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { MoviesContext } from "../../contexts/moviesContext";
import { ActorsContext } from "../../contexts/actorsContext";

const RemoveFromFavoritesIcon = ({ movie, actor }) => {
  const context = useContext(MoviesContext);
  const aContext = useContext(ActorsContext);

  const handleRemoveFromFavorites = (e) => {
    e.preventDefault();
    if (movie) {
      context.removeFromFavorites(movie);
    } else if (actor) {
      aContext.removeFromFavorites(actor);
    }
  };
  return (
    <IconButton
      aria-label="remove from favorites"
      onClick={handleRemoveFromFavorites}
    >
      <DeleteIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default RemoveFromFavoritesIcon;