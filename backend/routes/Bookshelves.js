const express = require("express");
const router = express.Router();
const { BOOKSHELF, BOOK } = require("../models");

//get all bookshelves
router.get("/getallbookshelves", async (req, res) =>{
    const allBookshelfes = await BOOKSHELF .findAll();
    res.json(allBookshelfes);

})

//creates new bookshelf
router.post("/newbookshelf", async (req, res) => {
    const newbookshelf = req.body;
    await BOOKSHELF.create(newbookshelf);
    res.json(newbookshelf);
  });

//delete bookshelf

router.delete("/deleteshelf/:id", async (req, res) => {
  const ID_BOOKSHELF = req.params.id
  console.log(ID_BOOKSHELF);
  try{
    const deleteShelf = await BOOKSHELF.findOne({where: {ID_BOOKSHELF}});
    await deleteShelf.destroy();
    return res.json(deleteShelf);
  } catch (err){
    console.log(err);
  }
})


module.exports = router;