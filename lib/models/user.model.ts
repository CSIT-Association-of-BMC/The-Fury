import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  imageUrl: String,
  email: String,
  property: {
    type: mongoose.Schema.ObjectId,
    ref: "Property",
  },
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
