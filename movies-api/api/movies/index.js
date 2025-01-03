import movieModel from './movieModel';
import asyncHandler from 'express-async-handler';
import express from 'express';
import {
    getUpcomingMovies, getMovies, getNowPlayingMovies, getGenres
  } from '../tmdb-api';
  
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
        console.error('Error fetching upcoming movies:', error);
        res.status(500).json({ error: 'Failed to fetch movies' });
    }
}));

// NOW PLAYING
router.get('/np', asyncHandler(async (req, res) => {
    try {
        const movies = await getNowPlayingMovies();
        res.status(200).json(movies);
    } catch (error) {
        console.error('Error fetching upcoming movies:', error);
        res.status(500).json({ error: 'Failed to fetch movies' });
    }
}));

// Get movie details
router.get('/:id', asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id);
    const movie = await movieModel.findByMovieDBId(id);
    if (movie) {
        res.status(200).json(movie);
    } else {
        res.status(404).json({message: 'The movie you requested could not be found.', status_code: 404});
    }
}));

router.get('/tmdb/genres', asyncHandler(async (req, res) => {
    const genres = await getGenres();
    res.status(200).json(genres);
}));

export default router;
