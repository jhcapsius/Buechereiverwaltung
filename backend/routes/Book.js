const express = require("express");
const router = express.Router();
const { BOOK } = require("../models");
const { validateToken } = require("../middleware/AuthMiddleware");

//get all books
router.get("/getallbooks", async (req, res) => {
  const allBooks = await BOOK.findAll();
  res.json(allBooks);
});

//get books by title
router.get("/getbooksbyname/:title", async(req, res) => {
  const TITLE = req.params.title;

  const books = await BOOK.findAll({where: {TITLE}});
  if(!books){
    res.send({found: false, message: "Buch nicht gefunden."})
  }else{
    res.send({found: true}, books);
  }
})

//get book by id
router.get("/getbookbyid/:id", async (req, res) => {
  const ID_BOOK = req.params.id;
  console.log(ID_BOOK);
  try {
    const book = await BOOK.findOne({ where: { ID_BOOK } });
    console.log(book);
    if (book === null) {
      res.json({});
    } else {
      res.json(book);
    }
  } catch (err) {
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
router.put("/borrowUser", async (req, res) => {
  const {ID_BOOK, BORROWED, ID_USER} = req.body;
  
  //gets book, removes bookshelf id, adds user id and changes borrowed status to true
  const borrowBook = await BOOK.findOne({where: {ID_BOOK}});
  console.log(borrowBook)
  borrowBook.BORROWED = BORROWED;
  borrowBook.ID_BOOKSHELF = null;
  borrowBook.ID_USER = ID_USER;
  console.log(borrowBook)

  //updates book entry in database
  await borrowBook.save();
  return res.send(borrowBook);
});

//changes the borrow status of a book
router.put("/borrowEmployee", async (req, res) => {
  const ID_BOOK = req.body.id;
  const BORROW = req.body.borrow;

  try {
    const bookToBorrow = await BOOK.findOne({ where: { ID_BOOK } });

    bookToBorrow.BORROWED = BORROW;
    bookToBorrow.EMAIL_ADDRESS = null; 
    console.log(bookToBorrow);
    await bookToBorrow.save();

    return res.json(bookToBorrow);
  } catch (err) {
    console.log(err);
  }
});

router.delete("/deletebook/:id", async (req, res) => {
  const ID_BOOK = req.params.id;
  try {
    const deleteBook = await BOOK.findOne({ where: { ID_BOOK } });
    console.log(deleteBook);

    await deleteBook.destroy();

    return res.json(deleteBook);
  } catch (err) {
    console.log(err);
  }
});

//puts book into a shelf
router.put("/addbooktoshelf", async (req, res) => {
  const ID_BOOK = req.body.id;
  const ID_BOOKSHELF = req.body.bookshelf;

  try {
    const addBook = await BOOK.findOne({ where: { ID_BOOK } });

    addBook.ID_BOOKSHELF = ID_BOOKSHELF;

    await addBook.save();

    return res.json(addBook);
  } catch (err) {
    console.log(err);
  }
});

//puts books from shelf into storage
router.put("/putbooktostorage", async (req, res) => {
  const ID_BOOKSHELF = req.body.id;

  try {
    const storagebooks = await BOOK.findAll({ where: { ID_BOOKSHELF } });
    await storagebooks.forEach((element) => {
      element.ID_BOOKSHELF = null;
    });
    console.log("hallo2");
    console.log(storagebooks);
    await storagebooks.forEach((element) => {
      element.save();
    });

    return res.json(storagebooks);
  } catch (err) {
    console.log(err);
  }
});

//put book into storage
router.put("/removebookfromshelf", async (req, res) => {
  const ID_BOOK = req.body.id;

  try {
    const storagebooks = await BOOK.findOne({ where: { ID_BOOK } });
    storagebooks.ID_BOOKSHELF = null;
    await storagebooks.save();
    return res.send(storagebooks);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
