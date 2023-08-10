import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  id: { type: String, required: true },
  username: { type: String, requied: true, unique: true },
  name: { type: String, required: true },
  image: { type: String },
  bio: { type: String },
  // one user can have multiple threads
  threads: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Thread",
      // one user can have multiple references to a specific thread stored in the database
    },
  ],
  onboarded: { type: Boolean, default: false },
  communities: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Community",
    },
  ],
});

// if existed, just fetch it from the database
// if not existed, create on in the mongoose
const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
