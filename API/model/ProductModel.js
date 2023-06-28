const mongoose = require('mongoose');
const {Schema} = mongoose

const addmovies = new Schema({
    image: { type: String},
    price: { type: String},
    category: { type: String},
  });

  const AddMovies = mongoose.model("movies", addmovies);

  module.exports = AddMovies