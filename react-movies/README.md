# Assignment 1 - ReactJS app.

Name: George Lipceanu

## Overview.

This is a React Web Application that uses data from TMDB to displays information on movies and actors. This application is an assignment for Web App Development 2 which builds upon labs done in class (which can be viewed in the commit history).

### New Features.
 
+ Now Playing Page - Page that displays movies that are now playing in cinemas.
+ Trending Today Page - Page that displays movies that are trending today.
+ Recommended Page - Page that displays recommendations for movies based on the movie that is being viewed currently.
+ Recommended Dropdown - Dropdown menu that allows users to directly go to a recommendation's details page based on the movie that is being viewed currently.
+ Actor Details Page - Page that shows details of an actor such as birthday, biography, death day if applicable, popularity and the movies they have featured in.
+ Sign in Page - Page that allows users to sign in or create an account.
+ Cast in Movie Details Page - List that shows the cast of a movie in it's details page.
+ Favorite Actors Page and Functionality - Functionality that allows users to add actors to "favorites", view these actors on a separate page, and/or remove them from that page. 
+ Watch List Page and Functionality - Functionality that allows users to add movies to their "watchlist", view these movies on a separate page, and/or remove them from that page. 
+ New Material UI Components - The addition of new components such as new icons (RemoveCircleIcon, CheckCircleIcon, LightbulbIcon, etc.), Alerts, etc. 
+ React Query Caching - Caching that is done on all endpoint (except for Sign In Page)
+ New Filtering, Sorting and Searching Options - Added for both movies and actors, allowing to filter and search for movies made between a certain time period, filter search for actors based on their name and their role, and sort both actors and movies based on their names alphabetically or their popularity (ascending or descending).
+ New Theme and Styles - Theme added along with added styles (if the theme doesn't work on a specific component).
+ Footer Component - Added to pages, casts, and lists of movies an actor has featured in with built in pagination, allowing users to flick through multiple pages (if they are available).
+ Firebase Authentication - Uses Firebase to allow users to sign in or sign up with their email and a password (no actual functionality other than just feedback via alert on wheter sign in or sign up worked or not).

## Setup requirements.

Firebase Setup:
+ Go to [here](https://console.firebase.google.com/)
+ Add Project
+ Add Project Name
+ Choose Default Account for Firebase
+ Click Web when adding an app
+ Add name and click Firebase Hosting
+ Move to Authentication
+ Install firebase using "npm install firebase"
+ Save Config details (including API Key) to .env
+ Install tools using "npm install -g firebase-tools"
+ Click Authentication
+ Get started
+ Click Email/Password, click enable and save

## API endpoints.

+ Discover list of movies - discover/movie
+ Movie details - movie/:id
+ Movie genres - /genre/movie/list
+ Movie reviews - /movie/:id/reviews
+ Movie images - /movie/:id/images
+ Upcoming Movies - /movie/upcoming 
+ Now playing movies - /movie/now_playing
+ Trending today - /trending/all/day
+ Recommended Movies (based on particular movie) - /movie/:id/recommendations
+ Movie Cast - /movie/:id/credits
+ Actor Details - /person/:id
+ Actor Images - /person/:id/images
+ Movies with actor (if considered a relevant endpoint) - /discover/movie?api_key=:api_key&language=en-US&include_adult=false&include_video=false&page=1&with_cast=:id

## Routing.

+ Home Page (displays discover movies list) - /
+ Movie Details Page (displays movie details, recommendations and cast) - /movies/:id
+ Actor Details Page (displays actor details and movies they have featured in) - /actors/:id
+ Recommended Movies Page (displays recommended movies based on movie chosen) - /movies/:id/recommended
+ Trending Today Page (displays trending movies list for today) - /movies/trending/today
+ Now Playing Page (displays now playing movies list) - /movies/now_playing
+ Upcoming page (displays upcoming movies list) - /movies/upcoming
+ Watch List Page (displays movies added to watch list) - /movies/watchlist
+ Favourite Movies Page (displays movies added to favorites) - /movies/favorites
+ Favourite Actors Page (displays movies added to favorite actors) - /movies/favorite_actors
+ Add review page (allows users to add reviews to a movie) - /reviews/form
+ Movie Review Page (displays specific reviews) - /reviews/:id
+ Sign In Page (allows users to sign in to or sign up for an account) - /signin

## Independent learning (If relevant).

+ [Select (for recommended dropdown)](https://mui.com/material-ui/react-select/)
+ [Sorting](https://www.geeksforgeeks.org/sort-an-array-in-javascript/)
+ [Pagination in Footer](https://www.contentful.com/blog/react-pagination/)
+ [Firebase Authentication](https://www.youtube.com/watch?v=2hR-uWjBAgw)
