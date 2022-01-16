const { Schema, model } = require("mongoose");

const movieSchema = new Schema(
  {
    TMDB_id: { type: String, required, unique: true },
    title: { type: String, required },
    // overview: { type: String },
    poster_path: { type: String },
    // vote_average: { type: Number },
    // release_date: { type: String },
    // favorite_by: [{ type: Schema.Types.ObjectId, ref: "User" }],
  },
  {
    timestamps: true,
  }
);

const Movie = model("Movie", movieSchema);

module.exports = Movie;