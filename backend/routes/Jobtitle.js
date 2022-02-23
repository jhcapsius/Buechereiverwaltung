const express = require("express");
const router = express.Router();
const { JOB_TITLE } = require("../models");

router.get("/getalljobtitles", async (req, res) =>{
    const allJobtitles = await JOB_TITLE.findAll();
    res.json(allJobtitles);
})

module.exports = router;