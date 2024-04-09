import mongoose from "mongoose";

const BookSchema = new mongoose.Schema({
    title : String,
    author : String,
    description : String,
    category : String,
    imageUrl : String,
    downloadUrl : String,
  },
  { timestamps : true }
);

const Book = mongoose.model("Book", BookSchema);
export default Book;