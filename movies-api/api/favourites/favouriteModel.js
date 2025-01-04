import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const FavoriteSchema = new Schema({
  username: { type: String },
  movie_ids: [{ type: Number }],
});

FavoriteSchema.statics.findByUsername = function (username) {
    return this.findOne({ username: username });
};

export default mongoose.model('FavoriteMovie', FavoriteSchema);


