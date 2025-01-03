import movieModel from './movieModel';
import asyncHandler from 'express-async-handler';
import express from 'express';
import imagesRouter from './images';
import reviewsRouter from './reviews';
import {
    getUpcomingMovies, getMovies, getNowPlayingMovies, getTrending, getGenres, getMovie, getMovieReviews
  } from '../tmdb-api';
import { get } from 'mongoose';
  
const router = express.Router();

// UPCOMING
router.get('/upcoming', asyncHandler(async (req, res) => {
    let { page = 1 } = req.query;
    [page] = [+page];

    try {
        const upcomingMovies = await getUpcomingMovies(page);
        res.status(200).json(upcomingMovies);
    } catch (error) {
        console.error('Error fetching upcoming movies:', error);
        res.status(500).json({ error: 'Failed to fetch upcoming movies' });
    }
}));

// HOME
router.get('/home', asyncHandler(async (req, res) => {
    let { page = 1 } = req.query;
    [page] = [+page];

    try {
        const movies = await getMovies(page);
        res.status(200).json(movies);
    } catch (error) {
        console.error('Error fetching movies:', error);
        res.status(500).json({ error: 'Failed to fetch movies' });
    }
}));

// NOW PLAYING
router.get('/np', asyncHandler(async (req, res) => {
    try {
        const movies = await getNowPlayingMovies();
        res.status(200).json(movies);
    } catch (error) {
        console.error('Error fetching np movies:', error);
        res.status(500).json({ error: 'Failed to fetch np movies' });
    }
}));

// TRENDING
router.get('/trending', asyncHandler(async (req, res) => {
    try {
        const movies = await getTrending();
        res.status(200).json(movies);
    } catch (error) {
        console.error('Error fetching trending movies:', error);
        res.status(500).json({ error: 'Failed to fetch trending movies' });
    }
}));

// GENRES
router.get('/genres', asyncHandler(async (req, res) => {
    try {
        const genres = await getGenres();
        console.log(genres)
        res.status(200).json(genres);
    } catch (error) {
        console.error('Error fetching genres:', error);
        res.status(500).json({ error: 'Failed to fetch genres' });
    }
}));

// Get movie details
router.get('/:id', asyncHandler(async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const movie = await getMovie(id);
        if (movie) 
            res.status(200).json(movie);
    } catch (error) {
        console.error('Error fetching movie details:', error);
        res.status(500).json({ error: 'Failed to fetch movie detailsssssssss' });
    }
}));

router.use('/images', imagesRouter);
router.use('/reviews', reviewsRouter);

export default router;
