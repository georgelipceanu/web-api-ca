import asyncHandler from 'express-async-handler';
import express from 'express';
import { getActorImages } from '../../tmdb-api';
  
const router = express.Router();

// Get actor images
router.get('/:id', asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id, 10);


    try {
        const images = await getActorImages(id);
        if (images) {
            res.status(200).json(images);
        } else {
            res.status(404).json({ error: 'Images not found' });
        }
    } catch (error) {
        console.error('Error fetching images:', error.message);
        res.status(500).json({ error: 'Failed to fetch images' });
    }
}));

export default router;
