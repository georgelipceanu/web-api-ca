import React, { useState } from "react";
import { getUpcomingMovies } from "../api/tmdb-api";
import PageTemplate from "../components/templateMovieListPage";
import Footer from "../components/footer";
import Spinner from "../components/spinner";
import { useQuery } from "react-query";
import { canNavigate } from "../utils/footerHandling";

const UpcomingMoviesPage = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const { data, error, isLoading, isError } = useQuery(
    ["upcoming", { page: currentPage }],
    getUpcomingMovies
  );

  if (isLoading) return <Spinner />;
  if (isError) return <h1>{error.message}</h1>;

  const movies = data.results;
  const totalPages = data.total_pages;

  return (
    <>
      <PageTemplate
        title="Upcoming Movies"
        movies={movies}
        action={(movie) => <div>{movie.title}</div>}
        currentPage={currentPage}
        setCurrentPage={(page) => {
        if (canNavigate(page, totalPages)) { // ONLY MOVES PAGES IF POSSIBLE
          setCurrentPage(page);
        }
      }}
      totalPages={totalPages}
      />
      
    </>
  );
};

export default UpcomingMoviesPage;
