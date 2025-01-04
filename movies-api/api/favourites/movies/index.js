import express from 'express';
import FavouriteMovie from '../favouriteModel';
import asyncHandler from 'express-async-handler';

const router = express.Router(); // eslint-disable-line

// Get favourites
router.get('/:id', asyncHandler(async (req, res) => {
    const id = req.params.id;
    const movies = await FavouriteMovie.findByUsername(id);
    res.status(200).json(movies);
}));

export default router;