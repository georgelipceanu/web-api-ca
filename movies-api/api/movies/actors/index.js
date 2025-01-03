import asyncHandler from 'express-async-handler';
import express from 'express';
import { getActors } from '../../tmdb-api';
  
const router = express.Router();

// REVIEWS
router.get('/:id', asyncHandler(async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const actors = await getActors(id);
        if (actors) 
            res.status(200).json(actors);
    } catch (error) {
        console.error('Error fetching movie recommendations:', error);
        res.status(500).json({ error: 'Failed to fetch movie recommendations' });
    }
}));

export default router;
