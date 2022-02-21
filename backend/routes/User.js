const express = require("express");
const router = express.Router();
const { USER } = require("../models");
const bcrypt = require("bcrypt");

//sends a list of all user
router.get("/getalluser", async (req, res) => {
  const allUser = await USER.findAll();
  res.json(allUser);
});

router.get("/getuserbyid/:email", async (req, res) => {
  const EMAIL_ADDRESS = req.params.email;
  console.log(EMAIL_ADDRESS);
  try {
    const user = await USER.findOne({ where: { EMAIL_ADDRESS } });
    console.log(user);
    if (user === null) {
      res.json({ exists: false });
    } else {
      res.json({ exists: true, message: "Account existiert bereits!" });
    }
  } catch (err) {
    console.log(err);
  }
});

router.post("/login", async (req, res) => {
  const { EMAIL_ADDRESS, PASSWORD } = req.body;

  const user = await USER.findOne({ where: { EMAIL_ADDRESS } });

  if (!user) {
    res.json({ loggedIn: false, message: "Account existiert nicht!" });
  }

  bcrypt.compare(PASSWORD, user.PASSWORD).then((match) => {
    if (!match) {
      res.json({
        loggedIn: false,
        message: "Ungültige Kombination aus Email-Adresse und Passwort!",
      });
    }else{
      console.log("User konnte sich erfolgreich einloggen.");
        res.send({ loggedIn: true });
    }
  });
});

//adds a new user to the data base
router.post("/register", async (req, res) => {
  const userdata = req.body;
  await bcrypt.hash(userdata.PASSWORD, 10).then((hash) => {
    userdata.PASSWORD = hash;
    USER.create(userdata);
  });
  res.json({ message: "Account wurde registriert" });
});

module.exports = router;
