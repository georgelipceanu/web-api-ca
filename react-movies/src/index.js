import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavoriteMoviesPage from "./pages/favoriteMoviesPage";
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader'
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools';
import MoviesContextProvider from "./contexts/moviesContext";
import AddMovieReviewPage from './pages/addMovieReviewPage'
import UpcomingMoviesPage from "./pages/upcomingMoviesPage";
import NowPlayingPage from "./pages/nowPlayingPage";
import WatchListPage from "./pages/watchListPage";
import RecommendedPage from "./pages/recommendedPage";
import ActorPage from "./pages/actorDetailsPage";
import ActorsContextProvider from "./contexts/actorsContext";
import TrendingTodayPage from './pages/trendingPage'
import { ThemeProvider } from "@mui/material/styles";
import CustomTheme from "./components/theme/index"
import CssBaseline from "@mui/material/CssBaseline";
import FavoriteActorsPage from "./pages/favouriteActorsPage";
import SignInPage from "./pages/signInPage";
import AuthContextProvider from "./contexts/authContext";
import ProtectedRoutes from "./protectedRoutes";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});



const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
      <AuthContextProvider>
      <ThemeProvider theme={CustomTheme}>
        <CssBaseline />
        <SiteHeader />
        <MoviesContextProvider>
          <ActorsContextProvider>
          <Routes>
          <Route path="/" element={<SignInPage />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/reviews/form" element={ <AddMovieReviewPage /> } />
            <Route path="/movies/favorites" element={<FavoriteMoviesPage />} />
            <Route path="/movies/favorite_actors" element={<FavoriteActorsPage />} />
            <Route path="/movies/watchlist" element={< WatchListPage/>} />
            <Route path="/movies/upcoming" element={<UpcomingMoviesPage />} />
            <Route path="/movies/trending/today" element={<TrendingTodayPage />} />
            <Route path="/movies/now_playing" element={<NowPlayingPage />} />
            <Route path="/reviews/:id" element={ <MovieReviewPage /> } />
            <Route path="/movies/:id" element={<MoviePage />} />
            <Route path="/movies/:id/recommended" element={ <RecommendedPage /> } />
            <Route path="/home" element={<HomePage />} />
            <Route path="/actors/:id" element={<ActorPage />} />
          </Route>
          <Route path="*" element={ <Navigate to="/" /> } />
          </Routes>
          </ActorsContextProvider>
        </MoviesContextProvider>
        </ThemeProvider>
        </AuthContextProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

const rootElement = createRoot( document.getElementById("root") )
rootElement.render(<App />);