import asyncHandler from 'express-async-handler';
import express from 'express';
import { getMoviesByActor } from '../../tmdb-api';
  
const router = express.Router();

// movies
router.get('/:id', asyncHandler(async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const movies = await getMoviesByActor(id);
        if (movies) 
            res.status(200).json(movies);
    } catch (error) {
        console.error('Error fetching movie recommendations:', error);
        res.status(500).json({ error: 'Failed to fetch movie recommendations' });
    }
}));

export default router;
