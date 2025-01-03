import asyncHandler from 'express-async-handler';
import express from 'express';
import { getMovieImages } from '../tmdb-api';
  
const router = express.Router();

// Get movie images
router.get('/movie/:id', asyncHandler(async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const movie = await getMovieImages(id);
        if (movie) 
            res.status(200).json(movie);
    } catch (error) {
        console.error('Error fetching movie images:', error);
        res.status(500).json({ error: 'Failed to fetch movie images' });
    }
}));