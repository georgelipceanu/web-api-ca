import express from 'express';
import FavouriteMovie from './favouriteModel';
import FavouriteActor from './favouriteModel';
import asyncHandler from 'express-async-handler';
import actorsRouter from './actors';
import moviesRouter from './movies'

const router = express.Router(); // eslint-disable-line

// Get favourites
router.get('/movies', async (req, res) => {
    const movies = await FavouriteMovie.find();
    res.status(200).json(movies);
});

router.get('/actors', async (req, res) => {
    const actors = await FavouriteActor.find();
    res.status(200).json(actors);
});

// register(Create)/Authenticate User
router.post('/', asyncHandler(async (req, res) => {
    try {
        if (!req.body.username || !req.body.password) {
            return res.status(400).json({ success: false, msg: 'Username and password are required.' });
        }
        if (req.query.action === 'register') {
            await registerUser(req, res);
        } else {
            await authenticateUser(req, res);
        }
    } catch (error) {
        // Log the error and return a generic error message
        console.error(error);
        res.status(500).json({ success: false, msg: 'Internal server error.' });
    }
}));

// Update a user
router.put('/:id', async (req, res) => {
    if (req.body._id) delete req.body._id;
    const result = await User.updateOne({
        _id: req.params.id,
    }, req.body);
    if (result.matchedCount) {
        res.status(200).json({ code:200, msg: 'User Updated Sucessfully' });
    } else {
        res.status(404).json({ code: 404, msg: 'Unable to Update User' });
    }
});

async function registerUser(req, res) {
    // Add input validation logic here
    await User.create(req.body);
    res.status(201).json({ success: true, msg: 'User successfully created.' });
}

router.use('/movies', moviesRouter);
router.use('/actors', actorsRouter);

export default router;