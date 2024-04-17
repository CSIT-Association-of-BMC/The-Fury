import mongoose from "mongoose";

const propertySchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  images: [String],
  bathroomNum: Number,
  address: String,
  category: {
    type: String,
    enum: ["room", "appartment", "house"],
    default: "room",
  },
  location: {
    type: {
      type: String,
      default: "Point",
      enum: ["Point"],
    },
    coordinates: [Number],
  },
});

propertySchema.index({ location: "2dsphere" });

const Property =
  mongoose.models.Property || mongoose.model("Property", propertySchema);

export default Property;
