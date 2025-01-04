import express from 'express';
import FavouriteActor from '../favouriteModelA';
import asyncHandler from 'express-async-handler';

const router = express.Router(); // eslint-disable-line

// Get favourites
router.get('/:id', asyncHandler(async (req, res) => {
    const id = req.params.id;
    const actors = await FavouriteActor.findByUsername(id);
    res.status(200).json(actors);
}));


export default router;