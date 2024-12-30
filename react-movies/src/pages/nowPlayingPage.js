import React from "react";
import { getNowPlayingMovies } from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites'
import AddToWatchList from "../components/cardIcons/addToWatchList";

const NowPlayingPage = (props) => {
  const {  data, error, isLoading, isError }  = useQuery('now_playing', getNowPlayingMovies)
  if (isLoading) {
    return <Spinner />
  }
  if (isError) {
    return <h1>{error.message}</h1>
  }  
  
  const movies = data.results;

  return (
    <PageTemplate
      title="Now Playing"
      movies={movies}
      action={(movie) => {
        return (
          <>
          <AddToFavoritesIcon movie={movie} />
          <AddToWatchList movie={movie} />
          </>
          );
      }}
    />
);
};
export default NowPlayingPage;