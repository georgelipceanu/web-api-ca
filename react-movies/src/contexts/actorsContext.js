import React, { useState } from "react";

export const ActorsContext = React.createContext(null);

const ActorsContextProvider = (props) => { //BOILEPLATE CODE FROM MOVIES CONTEXT
  const [favorites, setFavorites] = useState( [] )

  const addToFavorites = (actor) => {
    let newFavorites = [];
    if (!favorites.includes(actor.id)){
      newFavorites = [...favorites, actor.id];
    }
    else{
      newFavorites = [...favorites];
    }
    setFavorites(newFavorites)
  };

  
  // We will use this function in the next step
  const removeFromFavorites = (actor) => {
    setFavorites( favorites.filter(
      (mId) => mId !== actor.id
    ) )
  };

  //console.log(myReviews);
  return (
    <ActorsContext.Provider
      value={{
        favorites,
        addToFavorites,
        removeFromFavorites,
      }}
    >
      {props.children}
    </ActorsContext.Provider>
  );
};

export default ActorsContextProvider;