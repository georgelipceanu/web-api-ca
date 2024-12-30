import React, { useState, useEffect } from "react";
import ActorHeader from "../headerActor";
import Grid from "@mui/material/Grid2";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { getActorImages } from "../../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from '../spinner';
import MovieListPageTemplate from "../templateMovieListPage";
import AddToFavoritesIcon from "../cardIcons/addToFavorites";
import AddToWatchListIcon from "../cardIcons/addToWatchList";
import { getMoviesByActor } from "../../api/tmdb-api";
import { canNavigate } from "../../utils/footerHandling";

const TemplateActorPage = ({ actor, children }) => { //BOILER PLATE CODE FROM TEMPLATE MOVIE PAGE
  const [currentPage, setCurrentPage] = useState(1);
  const { data , error, isLoading, isError } = useQuery(
    ["images", { id: actor.id }],
    getActorImages
  );

  const { data: movies, error: moviesError, isLoading: moviesIsLoading, isError: moviesIsError } = useQuery(
    ["movies", { id: actor.id }],
    getMoviesByActor
  );


  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  const images = data.profiles; 

  console.log(actor);

  if (moviesIsLoading) {
    return <Spinner />;
  }

  if (moviesIsError) {
    return <h1>{moviesError.message}</h1>;
  }

  const moviesList = movies.results; 
  const moviesPerPage = 10; // CAN BE CHANGED DEPENDING ON WHATS NEEDED
  const totalPages = Math.ceil(moviesList.length / moviesPerPage); // CALCULATES ALL THE PAGES DEPENDING ON THE MOVIES PER PAGE
  const displayedMovies = moviesList.slice((currentPage - 1) * moviesPerPage, currentPage * moviesPerPage); // SLICES MOVIES DEPENDING ON CURRENT PAGE

  return (
    <>
      <ActorHeader actor={actor} />

      <Grid container spacing={5} style={{ padding: "15px" }}>
        <Grid size={{xs: 3}}>
          <div sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
          }}>
            <ImageList
                sx={{
                    height: "100vh",
                }}
                cols={1}
            >
                {images.map((image) => (
                    <ImageListItem key={image.file_path} cols={1}>
                    <img
                        src={`https://image.tmdb.org/t/p/w500/${image.file_path}`}
                        alt={image.poster_path}
                    />
                    </ImageListItem>
                ))}
            </ImageList>
          </div>
        </Grid>

        <Grid size={{xs: 9}}>
          {children}
          <MovieListPageTemplate
            title="Movies Featured In"
            movies={displayedMovies}
            isMovie={true}
            subHeader={true}
            currentPage={currentPage}
            totalPages={totalPages}
            setCurrentPage={(page) => { // ONLY SETS CURRENT PAGE IF POSSIBLE
              if (canNavigate(page, totalPages)) {
                setCurrentPage(page);
              }
            }}
            action={(movie) => {
              return (
              <>
              <AddToFavoritesIcon movie={movie} />
              <AddToWatchListIcon movie={movie} />
              </>
              );
            
            }}
            />
        </Grid>
      </Grid>
    </>
  );
};

export default TemplateActorPage;