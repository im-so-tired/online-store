import mongoose from "mongoose";
const Post = new mongoose.Schema({
  price: { type: Number, required: true },
	img: { type: String, required: true },
	description: { type: String, required: true },
});

export default mongoose.model('Post',Post)

