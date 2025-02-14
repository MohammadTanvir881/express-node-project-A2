import { Book } from "./../books.model";
import { TBooks } from "./books.inheritance";
import { Types } from "mongoose";  // Import ObjectId from mongoose

// find all the books data from DB
const getBooksDataFromDb = () => {
  const result = Book.find();
  return result;
};

// find a single book data here

const getSingleBookDataFromDb = async (id: string) => {
  // const result = await Book.findOne({ _id: id });
  const objectId = new Types.ObjectId(id);
  const result = await Book.aggregate([{ $match: { _id: objectId } }]);

  if(result.length === 0){
    throw Error("Book not found")
  }

  console.log(result);
  return result;
};

// create a new book data in DB

const createBookDataIntoDB = async (books: TBooks) => {
  const result = await Book.create(books);
  return result;
};

// update the book data here
const updateBookDataIntoDb = async (
  id: string,
  updateData: Record<string, any>
) => {
  const result = await Book.findByIdAndUpdate(
    id,
    { $set: updateData },
    { new: true, runValidators: true }
  );
  return result;
};

// delete the book data here
const deleteDataFromDB = async (id: string) => {
  const result = await Book.updateOne({ _id: id }, { isDeleted: true });
  return result;
};

export const bookServices = {
  getBooksDataFromDb,
  createBookDataIntoDB,
  getSingleBookDataFromDb,
  updateBookDataIntoDb,
  deleteDataFromDB,
};
