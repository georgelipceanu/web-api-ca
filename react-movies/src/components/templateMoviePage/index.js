import React, { useState } from "react";
import MovieHeader from "../headerMovie";
import Grid from "@mui/material/Grid2";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { getMovieImages } from "../../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from '../spinner';
import ActorListPageTemplate from "../templateMovieListPage";
import AddToFavoritesIcon from "../cardIcons/addToFavorites";
import { getActors } from "../../api/tmdb-api";
import { canNavigate } from "../../utils/footerHandling";

const TemplateMoviePage = ({ movie, children }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const { data, error, isLoading, isError } = useQuery(
    ["images", { id: movie.id }],
    getMovieImages
  );

  const { data: actors, error: actorError, isLoading: actorIsLoading, isError: actorIsError,} = useQuery(
    ["actors", { id: movie.id }], 
    getActors
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  const images = data.posters;

  if (actorIsLoading) {
    return <Spinner />;
  }

  if (actorIsError) {
    return <h1>{actorError.message}</h1>;
  }

  const actorsList = actors.cast;
  const actorsPerPage = 10; // CAN BE CHANGED DEPENDING ON WHATS NEEDED
  const totalPages = Math.ceil(actorsList.length / actorsPerPage); // CALCULATES ALL THE PAGES DEPENDING ON THE MOVIES PER PAGE
  const displayedActors = actorsList.slice((currentPage - 1) * actorsPerPage, currentPage * actorsPerPage); // SLICES MOVIES DEPENDING ON CURRENT PAGE

  return (
    <>
      <MovieHeader movie={movie} />

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
          <ActorListPageTemplate
            title="Movie Cast"
            actors={displayedActors} 
            isMovie={false}
            subHeader={true}
            currentPage={currentPage}
            totalPages={totalPages}
            setCurrentPage={(page) => {
              if (canNavigate(page, totalPages)) { // ONLY SETS CURRENT PAGE IF POSSIBLE
                setCurrentPage(page);
              }
            }}
            action={(actor) => {
              return (
                <>
                  <AddToFavoritesIcon actor={actor} />
                </>
              );
            }}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default TemplateMoviePage;
