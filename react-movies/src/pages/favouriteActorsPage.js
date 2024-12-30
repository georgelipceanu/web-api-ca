import React, { useContext } from "react";
import PageTemplate from "../components/templateMovieListPage";
import { MoviesContext } from "../contexts/moviesContext";
import { ActorsContext } from "../contexts/actorsContext";
import { useQueries } from "react-query";
import { getActor, getMovie } from "../api/tmdb-api";
import Spinner from '../components/spinner'
import RemoveFromFavorites from "../components/cardIcons/removeFromFavorites";
import WriteReview from "../components/cardIcons/writeReview";

const FavoriteActorsPage = () => {// BOILERPLATE CODE FROM FAVORITE MOVIES
    const {favorites: actorIds } = useContext(ActorsContext);

    // Create an array of queries and run in parallel.
    const favoriteActorQueries = useQueries(
      actorIds.map((actorId) => {
        return {
          queryKey: ["actor", { id: actorId }],
          queryFn: getActor,
        };
      })
    );

  // Check if any of the parallel queries is still loading.
  const actorsIsLoading = favoriteActorQueries.find((m) => m.isLoading === true);

  if (actorsIsLoading) {
    return <Spinner />;
  }



  const actors = favoriteActorQueries.filter((q) => q.data).map((q) => ({...q.data, character: "Favorite :)"})); // OVERRITES CHARACTERS TO "Favorite :)"


  return (
    <PageTemplate
      title="Favorite Actors"
      actors={actors}
      isMovie={false}
      action={(actor) => {
        return (
          <>
            <RemoveFromFavorites actor={actor} />

          </>
        );
      }}
    />
  );
};

export default FavoriteActorsPage;
