const express = require("express");
const router = express.Router();
const { BOOKSHELF } = require("../models");

//sends all bookshelves to the frontend
router.get("/getallbookshelves", async (req, res) =>{
    const allBookshelfes = await BOOKSHELF .findAll();
    res.json(allBookshelfes);

})

//adds a new bookshelf to the database
router.post("/newbookshelf", async (req, res) => {
    const newbookshelf = req.body;
    await BOOKSHELF .create(newbookshelf);
    res.json(newbookshelf);
  });


module.exports = router;