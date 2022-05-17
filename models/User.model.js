const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    username: { 
      type: String,
      unique: true,
      trim: true,
      required: [true, "Please input username"],
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, "Please enter a valid email"],
    },
    passwordHash: {
      type: String,
      required: [true, "Please input a password"],
    },
    favouriteTeam: {
      type: Schema.Types.ObjectId,
      ref: 'Team'
    }
  },
  {
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;
