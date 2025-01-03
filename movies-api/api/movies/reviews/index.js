import asyncHandler from 'express-async-handler';
import express from 'express';
import { getMovieReviews } from '../../tmdb-api';
  
const router = express.Router();

// REVIEWS
router.get('/:id', asyncHandler(async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const reviews = await getMovieReviews(id);
        if (reviews) 
            res.status(200).json(reviews);
    } catch (error) {
        console.error('Error fetching movie reviews:', error);
        res.status(500).json({ error: 'Failed to fetch movie reviews' });
    }
}));

export default router;
