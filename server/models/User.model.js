const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    username: { type: String, required: [true, 'You must have a username!'], unique: true },
    password: { type: String, required: [true, 'Protect your account...a password is required!'] },
    email: {
      type: String,
      lowercase: true,
      unique: true,
      required: [true, "Can't be blank"],
      match: [/\S+@\S+\.\S+/, "Email not valid"]
    },
    myLists: [{ type: Schema.Types.ObjectId, ref: "List" }],
    toseeTVList: [String],
    seenTVList: [String],
    toseeMovieList: [String],
    seenMovieList: [String],
  },
  { timestamps: true }
);

const User = model("User", userSchema);

module.exports = User;