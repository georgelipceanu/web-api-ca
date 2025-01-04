import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import { ActorsContext } from "../../contexts/actorsContext";
import { AuthContext } from "../../contexts/authContext";
import { updateFavouriteMovies, updateFavouriteActors } from "../../api/tmdb-api";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";

const AddToFavoritesIcon = ({ movie, actor }) => {
  const moviesContext = useContext(MoviesContext);
  const actorsContext = useContext(ActorsContext);
  const authContext = useContext(AuthContext);

  const handleAddToFavorites = async (e) => {
    e.preventDefault();
    if (movie) { //CHANGES FOR MOVIE OR ACTOR
      try {
        const updatedFavorites = [...moviesContext.favorites, movie.id];
        console.log("UPDATED FAVS:", updatedFavorites);
        moviesContext.addToFavorites(movie);
        const response = await updateFavouriteMovies(authContext.userName, updatedFavorites);
        console.log(response);
      } catch (error) {
        console.error("Error updating favorite movies:", error);
      }
    } else if (actor) {
      try {
        const updatedFavorites = [...actorsContext.favorites, actor.id];
        console.log("UPDATED FAVS:", updatedFavorites);
        actorsContext.addToFavorites(actor);
        const response = await updateFavouriteActors(authContext.userName, updatedFavorites);
        console.log(response);
      } catch (error) {
        console.error("Error updating favorite actors:", error);
      }  
    }
  };

  return (
    <IconButton aria-label="add to favorites" onClick={handleAddToFavorites}>
      <FavoriteIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddToFavoritesIcon;