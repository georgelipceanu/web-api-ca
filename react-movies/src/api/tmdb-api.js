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
  return response.json();
};