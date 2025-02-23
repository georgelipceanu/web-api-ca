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

export const getMovieReviews = async (args) => {
  const [, idPart] = args.queryKey;
  const { id } = idPart;
  
  const response = await fetch(
    `http://localhost:8080/api/movies/reviews/${id}`,
    { headers: {
      'Authorization': window.localStorage.getItem('token')
      }
    }
  )
  return response.json();
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

export const getMovieRecommendations = async (args) => {

  const [, idPart] = args.queryKey;
  const { id } = idPart;
  
  const response = await fetch(
    `http://localhost:8080/api/movies/recommended/${id}`,
    { headers: {
      'Authorization': window.localStorage.getItem('token')
      }
    }
  )
  return response.json();
};

export const getActors = async (args) => {

  const [, idPart] = args.queryKey;
  const { id } = idPart;
  
  const response = await fetch(
    `http://localhost:8080/api/movies/actors/${id}`,
    { headers: {
      'Authorization': window.localStorage.getItem('token')
      }
    }
  )
  return response.json();
};


export const getActor = async (args) => {
  //console.log(args)
  const [, idPart] = args.queryKey;
  const { id } = idPart;
  
  const response = await fetch(
    `http://localhost:8080/api/actors/${id}`,
    { headers: {
      'Authorization': window.localStorage.getItem('token')
      }
    }
  )
  return response.json();
};

export const getActorImages = async (args) => {
  //console.log(args)
  const [, idPart] = args.queryKey;
  const { id } = idPart;
  
  const response = await fetch(
    `http://localhost:8080/api/actors/images/${id}`,
    { headers: {
      'Authorization': window.localStorage.getItem('token')
      }
    }
  )
  return response.json();
};

export const getMoviesByActor = async (args) => {

  const [, idPart] = args.queryKey;
  const { id } = idPart;
  
  const response = await fetch(
    `http://localhost:8080/api/actors/movies/${id}`,
    { headers: {
      'Authorization': window.localStorage.getItem('token')
      }
    }
  )
  return response.json();
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
  if (response.status === 400) {
    const errorData = await response.json();
    return { success: false, msg: errorData.msg || 'Duplicate username.' };
  }

  if (!response.ok) {
    return { success: false, msg: 'An error occurred.' };
  }
  return response.json();
};

export const getFavouriteMovies = async (username) => {
  const response = await fetch(
    `http://localhost:8080/api/favourites/movies/${username}`,
    { headers: {
      'Authorization': window.localStorage.getItem('token')
      }
    }
  );
  return response.json();
}

export const updateFavouriteMovies = async (username, movie_ids) => {
  const response = await fetch(
    `http://localhost:8080/api/favourites/movies/${username}`,
    { headers: {
      'Authorization': window.localStorage.getItem('token'),
      'Content-Type': 'application/json'
      },
      method: 'put',
      body: JSON.stringify({ movie_ids: movie_ids })
    }
  );
  return response.json();
}

export const getFavouriteActors = async (username) => {
  const response = await fetch(
    `http://localhost:8080/api/favourites/actors/${username}`,
    { headers: {
      'Authorization': window.localStorage.getItem('token')
      }
    }
  );
  return response.json();
}

export const updateFavouriteActors = async (username, actor_ids) => {
  const response = await fetch(
    `http://localhost:8080/api/favourites/actors/${username}`,
    { headers: {
      'Authorization': window.localStorage.getItem('token'),
      'Content-Type': 'application/json'
      },
      method: 'put',
      body: JSON.stringify({ actor_ids: actor_ids })
    }
  );
  return response.json();
}


export const getWatchlist = async (username) => {
  const response = await fetch(
    `http://localhost:8080/api/watchlist/${username}`,
    { headers: {
      'Authorization': window.localStorage.getItem('token')
      }
    }
  );
  return response.json();
}

export const updateWatchlist = async (username, movie_ids) => {
  const response = await fetch(
    `http://localhost:8080/api/watchlist/${username}`,
    { headers: {
      'Authorization': window.localStorage.getItem('token'),
      'Content-Type': 'application/json'
      },
      method: 'put',
      body: JSON.stringify({ movie_ids: movie_ids })
    }
  );
  return response.json();
}