export const getMovies = async ({ queryKey }) => {
  const [, pagePart] = queryKey;
  const { page } = pagePart;
  
  const response = await fetch(
    `http://localhost:8080/api/movies/home?page=${page}`,
    { headers: {
      'Authorization': window.localStorage.getItem('token')
      }
    }
  )
  return response.json();
};

export const getUpcomingMovies = async ({ queryKey }) => {
  const [, pagePart] = queryKey;
  const { page } = pagePart;
  
  const response = await fetch(
    `http://localhost:8080/api/movies/upcoming?page=${page}`,
    { headers: {
      'Authorization': window.localStorage.getItem('token')
      }
    }
  )
  return response.json();
};

export const getMovie = async (args) => {
  //console.log(args)
  const [, idPart] = args.queryKey;
  const { id } = idPart;
  
  const response = await fetch(
    `http://localhost:8080/api/movies/${id}`,
    { headers: {
      'Authorization': window.localStorage.getItem('token')
      }
    }
  )
  return response.json();
};

export const getGenres = async () => {
  const response = await fetch(
    `http://localhost:8080/api/movies/genres`,
    { headers: {
      'Authorization': window.localStorage.getItem('token')
      }
    }
  )
  return response.json();
};

export const getMovieImages = async (args) => {
  //console.log(args)
  const [, idPart] = args.queryKey;
  const { id } = idPart;
  
  const response = await fetch(
    `http://localhost:8080/api/movies/images/${id}`,
    { headers: {
      'Authorization': window.localStorage.getItem('token')
      }
    }
  )
  return response.json();
};
  // export const getMovieImages = ({ queryKey }) => {
  //   const [, idPart] = queryKey;
  //   const { id } = idPart;
  //   return fetch(
  //     `https://api.themoviedb.org/3/movie/${id}/images?api_key=${process.env.REACT_APP_TMDB_KEY}`
  //   ).then( (response) => {
  //     if (!response.ok) {
  //       return response.json().then((error) => {
  //         throw new Error(error.status_message || "Something went wrong");
  //       });
  //     }
  //     return response.json();
  //   })
  //   .catch((error) => {
  //     throw error
  //  });
  // };

  export const getMovieReviews = ({ queryKey }) => {
    const [, idPart] = queryKey;
    const { id } = idPart;
    return fetch(
      `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${process.env.REACT_APP_TMDB_KEY}`
    ).then( (response) => {
      if (!response.ok) {
        return response.json().then((error) => {
          throw new Error(error.status_message || "Something went wrong");
        });
      }
      return response.json();
    })
    .catch((error) => {
      throw error
   });
  };

export const getNowPlayingMovies = async () => {
  const response = await fetch(
    `http://localhost:8080/api/movies/np`,
    { headers: {
      'Authorization': window.localStorage.getItem('token')
      }
    }
  )
  return response.json();
};


export const getTrending = async () => {
  const response = await fetch(
    `http://localhost:8080/api/movies/trending`,
    { headers: {
      'Authorization': window.localStorage.getItem('token')
      }
    }
  )
  return response.json();
};

export const getMovieRecommendations = ({ queryKey }) => {
  const [, idPart] = queryKey;
  const { id } = idPart;
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`
  ).then( (response) => {
    if (!response.ok) {
      return response.json().then((error) => {
        throw new Error(error.status_message || "Something went wrong");
      });
    }
    return response.json();
  })
  .catch((error) => {
    throw error
 });
};

export const getActors = ({ queryKey }) => {
  const [, idPart] = queryKey;
  const { id } = idPart;
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.REACT_APP_TMDB_KEY}`
  )
  .then( (response) => {
    if (!response.ok) {
      return response.json().then((error) => {
        throw new Error(error.status_message || "Something went wrong");
      });
    }
    return response.json();
  })
  .catch((error) => {
    throw error
  });
};

export const getActor = (args) => {
  const [, idPart] = args.queryKey;
  const { id } = idPart;
  return fetch(
    `https://api.themoviedb.org/3/person/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`
  ).then((response) => {
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();
  })
  .catch((error) => {
     throw error
  });
};

export const getActorImages = ({ queryKey }) => {
  const [, idPart] = queryKey;
  const { id } = idPart;
  return fetch(
    `https://api.themoviedb.org/3/person/${id}/images?api_key=${process.env.REACT_APP_TMDB_KEY}`
  ).then( (response) => {
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();

  })
  .catch((error) => {
    throw error
 });
};

export const getMoviesByActor = ({ queryKey }) => {
  const [, idPart] = queryKey;
  const { id } = idPart;
  return fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=1&with_cast=${id}`
  )
    .then((response) => {
      if (!response.ok) {
        return response.json().then((error) => {
          throw new Error(error.status_message || "Something went wrong");
        });
      }
      return response.json();
    })
    .catch((error) => {
      throw error;
    });
};

export const login = async (username, password) => {
  const response = await fetch('http://localhost:8080/api/users', {
      headers: {
          'Content-Type': 'application/json'
      },
      method: 'post',
      body: JSON.stringify({ username: username, password: password })
  });
  return response.json();
};

export const signup = async (username, password) => {
  const response = await fetch('http://localhost:8080/api/users?action=register', {
      headers: {
          'Content-Type': 'application/json'
      },
      method: 'post',
      body: JSON.stringify({ username: username, password: password })
  });
  return response.json();
};