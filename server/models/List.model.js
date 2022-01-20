const { Schema, model } = require("mongoose");

const listSchema = new Schema(
  {
    publishedBy: { type: Schema.Types.ObjectId, ref: "User" },
    publishedUsername: { type: String },
    listName: { type: String, required: [true, "Please, give a name to the list!"] },
    TMDBids: [String],
  },
  { timestamps: true }
);

const List = model("List", listSchema);

module.exports = List;