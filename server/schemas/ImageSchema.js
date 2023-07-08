import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ImageSchema = new Schema({
  name: String,
  img: {
    data: String,
    // contentType: "String",
  },
});

export default mongoose.model("ImageSchema", ImageSchema);
