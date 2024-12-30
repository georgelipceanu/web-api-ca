import React from "react";
import { getTrending } from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from 'react-query';
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites';
import Spinner from '../components/spinner';
const TrendingTodayPage = (props) => {
  const { data, error, isLoading, isError }  = useQuery('trending/today', getTrending)
  
  if (isLoading) {
    return <Spinner />
  }
  
  if (isError) {
    return <h1>{error.message}</h1>
  }  
  
  console.log(data); // INSPECTING DATA FOR ERROR
  const movies = data?.results?.filter((item) => item.media_type === "movie") || []; // FILTERING OUT ALL TRENDING THAT IS NOT MOVIE
  //const movies = data.results;
  // Redundant, but necessary to avoid app crashing.
  const favorites = movies.filter(m => m.favorite)
  localStorage.setItem('favorites', JSON.stringify(favorites))
  return (
    <PageTemplate
      title='Trending Today'
      movies={movies}
      action={(movie) => {
        return <AddToFavoritesIcon movie={movie} />
      }}
    />
  );
};
export default TrendingTodayPage;