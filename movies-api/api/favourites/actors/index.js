import express from 'express';
import FavouriteActor from './favouriteModelA';
import asyncHandler from 'express-async-handler';

const router = express.Router(); // eslint-disable-line

// Get favourites
router.get('/:id', async (req, res) => {
    const movies = await FavouriteActor.find();
    res.status(200).json(movies);
});

export default router;