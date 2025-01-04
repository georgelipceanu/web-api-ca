import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import { AuthContext } from "../../contexts/authContext";
import { updateWatchlist } from "../../api/tmdb-api";
import IconButton from "@mui/material/IconButton";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";

const AddToWatchListIcon = ({ movie }) => {
  const context = useContext(MoviesContext);
  const authContext = useContext(AuthContext);

  const handleAddToWatchList = async (e) => {
    e.preventDefault();
    try {
      const updatedWatchlist = [...context.watchList, movie.id];
      console.log("UPDATED watch:", updatedWatchlist);
      context.addToWatchList(movie);
      const response = await updateWatchlist(authContext.userName, updatedWatchlist);
      console.log(response);
    } catch (error) {
      console.error("Error updating watclist:", error);
    }
  };

  return (
    <IconButton aria-label="add to favorites" onClick={handleAddToWatchList}>
      <PlaylistAddIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddToWatchListIcon;