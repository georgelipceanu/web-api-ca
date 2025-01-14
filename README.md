# Assignment 2 - Web API.

Name: George Lipceanu

## Features.
 
 + Favorites (Movies and Actors) and Watchlist specific for each user using MongoDB
 + Duplicate username handling on signups
 + Fully integrated and connected frontend and backend (all fetches from frontend are made through backend)
 + New favouritemovies, favouriteactors and watchlist collections added to MongoDB
 + Protected routes added on all pages

## Setup requirements.

+ Check the README.md file in the react-movies folder for installation of frontend app.
+ npm install in both react-movies and movies-api.
+ npm install dotenv in both folders.
+ npm start in react-app
+ npm run dev in movie-api 

## API Configuration

Create .env files in both directories

movies-api/.env
______________________
+ NODEENV=development
+ PORT=8080
+ HOST=localhost
+ mongoDB= YOUR MONGO URL
+ TMDB_KEY= YOUR TMDB KEY
+ secret= YOUR JWT SECRET
______________________

react-movies/.env
______________________
+ REACT_APP_TMDB_KEY= YOUR TMDB KEY
+ FIREBASE_API_KEY= YOUR FIREBASE CREDENTIALS
+ FIREBASE_AUTH_DOMAIN=
+ FIREBASE_PROJECT_ID=
+ FIREBASE_STORAGE_BUCKET=
+ FIREBASE_MESSAGE_SENDER_ID=
+ FIREBASE_APP_ID=
+ FAST_REFRESH=false
______________________

## API Design
Give an overview of your web API design, perhaps similar to the following: 

- /api/movies/home?page={page} | GET | Gets the discover movies (on a specific page). 
- /api/movies/upcoming?page={page} | GET | Gets the upcoming movies (on a specific page). 
- /api/movies/{id} | GET | Gets a single movie from TMDB using it's id.
- /api/movies/genres | GET | Gets all available genres.
- /api/movies/images/{id} | GET | Gets images related to a specific movie.
- /api/movies/np | GET | Gets now playing movies.
- /api/movies/trending | GET | Gets trending movies.
- /api/movies/recommended/{id} | GET | Gets all recommendations given from a specific movie.
- /api/movies/actors/{id} | GET | Gets all actors from a specific movie.
- /api/actors/{id} | GET | Gets a specific actor.
- /api/actors/images/${id} | GET | Gets images related to a specific actor.
- /api/actors/movies/{id} | GET | Gets all movies an actor has featured in.
- /api/favourites/movies/{username} | GET | Gets all movies a user has favourited.
- /api/favourites/actors/{username} | GET | Gets all actors a user has favourited.
- /api/watchlist/{username} | GET | Gets all movies a user has added to watchlist.
- /api/users | POST | Log in to a specific account.
- /api/users?action=register | POST | Register for a new account.
- /api/favourites/movies/{username} | PUT | Update a users favourite movies.
- /api/favourites/actors/{username} | PUT | Update a users favourite actors.
- /api/watchlist/{username} | PUT | Update a users watchlist.

[Swaggerhub](https://app.swaggerhub.com/apis/20103125/Movies-API/1.0.0).

## Security and Authentication

+ Users are registered and authenticated using post endpoint
+ Salting and hashing of passwords is performed before being put onto Mongo to keep passwords secret
+ JWT tokens are issued upon authentication, allowing users to access protected routes (which are all routes except for the sign in/up page)
+ Username and passwords are validated from the endpoint (username must be unique, passwords must include at least 8 characters, 1 upper and lower case, number and symbol, with error and success messages)

## Integrating with React App

Describe how you integrated your React app with the API. List the views that use your Web API instead of the TMDB API. Describe any other updates to the React app from Assignment One.

+ Fully connected React frontend with backend
+ Backend makes all calls to TMDB and MongoDB, which frontend fetches through connected backend API calls
+ New collections made in MongoDB (favouritemovies, favouriteactors, watchlist)

## Independent learning

- Async Functions [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function).