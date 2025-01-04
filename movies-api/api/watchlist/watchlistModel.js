import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const WatchlistSchema = new Schema({
  username: { type: String },
  movie_ids: [{ type: Number }],
});

WatchlistSchema.statics.findByUsername = function (username) {
    return this.findOne({ username: username });
};

export default mongoose.model('WatchlistMovie', WatchlistSchema);