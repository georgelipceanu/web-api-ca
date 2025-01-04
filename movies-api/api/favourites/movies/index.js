import express from 'express';
import FavouriteMovie from './favouriteModel';
import asyncHandler from 'express-async-handler';

const router = express.Router(); // eslint-disable-line

// Get favourites
router.get('/:id', async (req, res) => {
    const movies = await FavouriteMovie.find();
    res.status(200).json(movies);
});

export default router;