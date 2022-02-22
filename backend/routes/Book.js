const express = require("express");
const router = express.Router();
const { BOOK } = require("../models");
const { validateToken } = require("../middleware/AuthMiddleware");

//get all books
router.get("/getallbooks", async (req, res) => {
  const allBooks = await BOOK.findAll();
  res.json(allBooks);
});

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
router.put("/borrowUser", validateToken, async (req, res) => {
  const {ID_BOOK, BORROWED, EMAIL_ADDRESS} = req.body;
  
  try {
    const bookToBorrow = await BOOK.findOne({ where: { ID_BOOK } });

    bookToBorrow.BORROWED = BORROWED;
    bookToBorrow.EMAIL_ADDRESS = EMAIL_ADDRESS;

    console.log(bookToBorrow);

    await bookToBorrow.save();

    return res.json(bookToBorrow);
  } catch (err) {
    console.log(err);
  }
});

//changes the borrow status of a book
router.put("/borrowEmployee", validateToken, async (req, res) => {
  const ID_BOOK = req.body.id;
  const BORROW = req.body.borrow;

  try {
    const bookToBorrow = await BOOK.findOne({ where: { ID_BOOK } });

    bookToBorrow.BORROWED = BORROW;
    
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
