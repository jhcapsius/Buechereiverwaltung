const express = require("express");
const router = express.Router();
const { USER } = require("../models");
const bcrypt = require("bcrypt");
const { sign } = require("jsonwebtoken");


//gets all user
router.get("/getalluser", async (req, res) => {
  const allUser = await USER.findAll();
  res.json(allUser);
});

//login route
router.post("/login", async (req, res) => {
  const { USERNAME, PASSWORD } = req.body;

  const user = await USER.findOne({ where: { USERNAME } });
  console.log(user);

  //login logic
  if (!user) {
    res.json({ loggedIn: false, message: "Account existiert nicht!" });
  } else {
    bcrypt.compare(PASSWORD, user.PASSWORD).then((match) => {
      if (!match) {
        res.json({
          loggedIn: false,
          message: "Ungültige Kombination aus Username und Passwort!",
        });
      } else {
        console.log("User konnte sich erfolgreich einloggen.");
        const accessToken = sign(
          { user: user.USERNAME},
          "~&Nc<SDtH}:uPjsW"
        );
        res.send({ loggedIn: true, accessToken, id: user.ID_USER });
      }
    });
  }
});

//adds a new user to the data base
router.post("/register", async (req, res) => {
  const userdata = req.body;
  const { USERNAME, EMAIL_ADDRESS } = req.body;
  console.log(userdata)

  //searches for a user with the given username
  const username = await USER.findOne({ where: { USERNAME } });
  console.log(username);

  //searches for a user with the given email address
  const usermail = await USER.findOne({ where: { EMAIL_ADDRESS } });
  console.log(usermail);

  //adds a new user when username and email address are not taken
  if (!username && !usermail) {
    await bcrypt.hash(userdata.PASSWORD, 10).then((hash) => {
      userdata.PASSWORD = hash;
      USER.create(userdata);
    });
    res.json({message: "Account wurde registriert", registered: true});
  }else if (username){
    res.json({message: "Username gibt es schon", registered: false})
  }else{
    res.json({message: "Ungültige Email-Adresse", registered: false})
  }
});

module.exports = router;
