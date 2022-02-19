const express = require("express");
const router = express.Router();
const { USER } = require("../models");

//sends a list of all user
router.get("/getalluser", async (req, res) =>{
    const allUser = await USER.findAll();
    res.json(allUser);

})

//adds a new user to the data base
router.post("/register", async (req, res) =>{
    const userdata = req.body;
    await USER.create(userdata)
    res.json(userdata);
})



module.exports = router;