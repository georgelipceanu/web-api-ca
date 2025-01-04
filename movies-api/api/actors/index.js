import asyncHandler from 'express-async-handler';
import express from 'express';
import imagesRouter from './images';
import { getActor } from '../tmdb-api';

const router = express.Router();

// actors
router.get('/:id', asyncHandler(async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const actor = await getActor(id);
        if (actor) 
            res.status(200).json(actor);
    } catch (error) {
        console.error('Error fetching movie actors:', error);
        res.status(500).json({ error: 'Failed to fetch movie actors' });
    }
}));

router.use('/images', imagesRouter);

export default router;
