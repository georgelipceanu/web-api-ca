import React, { useContext } from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { MoviesContext } from "../../contexts/moviesContext";
import { AuthContext } from "../../contexts/authContext";
import { updateWatchlist } from "../../api/tmdb-api";

const RemoveFromWatchListIcon = ({ movie }) => {
  const context = useContext(MoviesContext);
  const authContext = useContext(AuthContext);

  const handleRemoveFromWatchList = async (e) => {
    e.preventDefault();
    try {
      const updatedWatchlist = context.watchList.filter((id) => id !== movie.id);
      console.log("UPDATED watchlist:", updatedWatchlist);
      context.removeFromWatchList(movie);
      const response = await updateWatchlist(authContext.userName, updatedWatchlist);
      console.log(response);
    } catch (error) {
      console.error("Error updating watclist:", error);
    }
  };
  return (
    <IconButton
      aria-label="remove from watchlist"
      onClick={handleRemoveFromWatchList}
    >
      <DeleteIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default RemoveFromWatchListIcon;