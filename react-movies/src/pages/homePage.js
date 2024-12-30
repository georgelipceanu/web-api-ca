import React, {useState} from "react";
import { getMovies } from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites'
import AddToWatchList from '../components/cardIcons/addToWatchList'
import { Pagination } from "@mui/material";
import Footer from "../components/footer";
import { canNavigate } from "../utils/footerHandling";

const HomePage = (props) => {

  const [currentPage, setCurrentPage] = useState(1);
  const {  data, error, isLoading, isError }  = useQuery(
    ['discover', { page: currentPage }], 
    getMovies
  );

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const movies = data.results;
  const totalPages = data.total_pages;
  
  // Redundant, but necessary to avoid app crashing.
  const favorites = movies.filter(m => m.favorite)
  localStorage.setItem('favorites', JSON.stringify(favorites))
  const addToFavorites = (movieId) => true 

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  return (
    <>
    <PageTemplate
    
      title="Discover Movies"
      movies={movies}
      isMovie={true}
      subHeader={false}
      currentPage={currentPage}
      setCurrentPage={(page) => {
        if (canNavigate(page, totalPages)) { // ONLY MOVES PAGES IF POSSIBLE
          setCurrentPage(page);
        }
      }}
      totalPages={totalPages}
      action={(movie) => {
        return (
        <>
        <AddToFavoritesIcon movie={movie} />
        <AddToWatchList movie={movie} />
        </>
        );
      
      }}
    />
     {/* <Pagination
        count={Math.ceil(movies.length / itemsPerPage)} 
        page={currentPage}
        onChange={handlePageChange}
        color="secondary"
      /> PREVIOUS ATTEMPT, ONLY GOT PAGES on PAGE 1*/} 
    </>
  );
};
export default HomePage;