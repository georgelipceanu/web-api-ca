import dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose';
import users from './users';
import movies from './movies';
import favMovies from './favMovies';
import favActors from './favActors';
import User from '../api/users/userModel';
import Movie from '../api/movies/movieModel';
import FavoriteMovie from '../api/favourites/favouriteModel';
import FavoriteActor from '../api/favourites/favouriteModelA';

async function main() {
    if (process.env.NODE_ENV !== 'development') {
        console.log('This script is only for the development environment.');
        return;
    }
    await mongoose.connect(process.env.MONGO_DB);
    // Drop collections
    await User.collection.drop().catch(err => console.log('User collection not found'));
    await Movie.collection.drop().catch(err => console.log('Movie collection not found'));
    await FavoriteMovie.collection.drop().catch(err => console.log('FavouriteMovie collection not found'));
    await FavoriteActor.collection.drop().catch(err => console.log('FavouriteActor collection not found'));

    await User.create(users);
    await Movie.create(movies);
    await FavoriteMovie.create(favMovies);
    await FavoriteActor.create(favActors);
    console.log('Database initialised');
    console.log(`${users.length} users loaded`);
    console.log(`${movies.length} movies loaded`);
    console.log(`${favMovies.length} fav movies loaded`);
    console.log(`${favActors.length} fav actors loaded`);
    await mongoose.disconnect();
}

main();
