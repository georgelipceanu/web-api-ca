import React, { useContext } from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { MoviesContext } from "../../contexts/moviesContext";
import { ActorsContext } from "../../contexts/actorsContext";
import { AuthContext } from "../../contexts/authContext";
import { updateFavouriteMovies, updateFavouriteActors } from "../../api/tmdb-api";

const RemoveFromFavoritesIcon = ({ movie, actor }) => {
  const context = useContext(MoviesContext);
  const aContext = useContext(ActorsContext);
  const authContext = useContext(AuthContext);

  const handleRemoveFromFavorites = async (e) => {

    e.preventDefault();
    if (movie) {
      try {
        const updatedFavorites = context.favorites.filter((id) => id !== movie.id); // KEEP EVERYTHING EXCEPT FOR MOVIE.ID
        console.log("UPDATED FAVS BEFORE API CALL:", updatedFavorites);
        context.removeFromFavorites(movie);
        const response = await updateFavouriteMovies(authContext.userName, updatedFavorites);
        console.log(response);
      } catch (error) {
        console.error("Error updating favorite movies:", error);
      }
    } else if (actor) {
      try {
        const updatedFavorites = aContext.favorites.filter((id) => id !== actor.id); // KEEP EVERYTHING EXCEPT FOR actor.ID
        console.log("UPDATED FAVS BEFORE API CALL:", updatedFavorites);
        aContext.removeFromFavorites(actor);
        const response = await updateFavouriteActors(authContext.userName, updatedFavorites);
        console.log(response);
      } catch (error) {
        console.error("Error updating favorite movies:", error);
      } 
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