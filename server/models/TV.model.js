const { Schema, model } = require("mongoose");

const TVSchema = new Schema(
  {
    TMDB_id: { type: String, unique: true },
    name: { type: String, required },
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

const TV = model("TV", TVSchema);

module.exports = TV;