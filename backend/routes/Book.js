const express = require("express");
const router = express.Router();
const { BOOK } = require("../models");

//get all books
router.get("/getallbooks", async (req, res) => {
  const allBooks = await BOOK.findAll();
  res.json(allBooks);
});

//get book by id 
router.get("/getbookbyid/:id", async (req, res) => {
  const ID_BOOK = req.params.id;
  console.log(ID_BOOK);
  try{
    const book = await BOOK.findOne({where: {ID_BOOK}})
    console.log(book);
    if(book === null){
      res.json({});
    }else{
      res.json(book);
    }
  }catch(err){
    console.log(err);
  }
});

//adds a new book to the database
router.post("/addbook", async (req, res) => {
  const addBook = req.body;
  console.log(addBook);
  await BOOK.create(addBook);
  res.json(addBook);
});

//changes the borrow status of a book
router.put("/borrow", async (req, res) => {
  const ID_BOOK = req.body.id;
  const BORROW = req.body.borrow;

  try{
      const bookToBorrow = await BOOK.findOne({where: {ID_BOOK}})
    
      bookToBorrow.BORROWED = BORROW;
      
      await bookToBorrow.save();

      return res.json(bookToBorrow);
  }catch (err){
      console.log(err)
  }
});

//puts book into a shelf
router.put("/addbooktoshelf", async (req, res) => {
  const ID_BOOK = req.body.id;
  const ID_BOOKSHELF = req.body.bookshelf;

  try{
      const addBook = await BOOK.findOne({where: {ID_BOOK}})
    
      addBook.ID_BOOKSHELF = ID_BOOKSHELF;
      
      await addBook.save();

      return res.json(addBook);
  }catch (err){
      console.log(err)
  }
});

module.exports = router;
