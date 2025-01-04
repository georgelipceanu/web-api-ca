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

// UPDATE
router.put('/:id', asyncHandler(async (req, res) => {
    const id = req.params.id;
    const { actor_ids } = req.body;
    const updatedActors = await FavouriteActor.findOneAndUpdate(
        { username: id }, // find by username
        { actor_ids },
        { new: true, upsert: true } // return updated document, create if not found
    );
    res.status(200).json(updatedActors);
}));

export default router;