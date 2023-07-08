import mongoose from "mongoose";

const Schema = mongoose.Schema;
const ProductSchema = new Schema({
  _id: {
    type: Schema.Types.ObjectId,
    auto: true,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  img: {
    data: String,
  },
  guaranty: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  buyDate: {
    type: String,
    required: true,
  },
});

export default mongoose.model("ProductSchema", ProductSchema);
