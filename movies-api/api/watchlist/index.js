import express from 'express';
import WatchlistMovie from './watchlistModel';
import asyncHandler from 'express-async-handler';

const router = express.Router(); // eslint-disable-line

// Get watchlist
router.get('/:id', asyncHandler(async (req, res) => {
    const id = req.params.id;
    const movies = await WatchlistMovie.findByUsername(id);
    res.status(200).json(movies);
}));

// UPDATE
router.put('/:id', asyncHandler(async (req, res) => {
    const id = req.params.id;
    const { movie_ids } = req.body;
    const updatedMovies = await WatchlistMovie.findOneAndUpdate(
        { username: id }, // find by username
        { movie_ids },    // replace movie_ids
        { new: true, upsert: true } // return updated document, create if not found
    );
    res.status(200).json(updatedMovies);
}));

export default router;