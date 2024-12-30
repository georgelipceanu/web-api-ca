import React, { useState } from "react";

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
  const [favorites, setFavorites] = useState( [] )
  const [myReviews, setMyReviews] = useState( {} ) 
  const [watchList, setWatchList] = useState( [] )

  const addToFavorites = (movie) => {
    let newFavorites = [];
    if (!favorites.includes(movie.id)){
      newFavorites = [...favorites, movie.id];
    }
    else{
      newFavorites = [...favorites];
    }
    setFavorites(newFavorites)
  };

  
  // We will use this function in the next step
  const removeFromFavorites = (movie) => {
    setFavorites( favorites.filter(
      (mId) => mId !== movie.id
    ) )
  };

  const addReview = (movie, review) => {
    setMyReviews( {...myReviews, [movie.id]: review } )
  };

  const addToWatchList = (movie) => {
    let newWatchList = [];
    if (!watchList.includes(movie.id)){
      newWatchList = [...watchList, movie.id];
    }
    else{
      newWatchList = [...watchList];
    }
    setWatchList(newWatchList)
    console.log(newWatchList)
  };

  const removeFromWatchList = (movie) => {
    setWatchList( watchList.filter(
      (mId) => mId !== movie.id
    ) )
  };

  //console.log(myReviews);
  return (
    <MoviesContext.Provider
      value={{
        favorites,
        watchList,
        addToFavorites,
        removeFromFavorites,
        addReview,
        addToWatchList,
        removeFromWatchList,
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;