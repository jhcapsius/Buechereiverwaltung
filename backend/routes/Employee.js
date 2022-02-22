const express = require("express");
const router = express.Router();
const { EMPLOYEE } = require("../models");
const { sign } = require("jsonwebtoken");

router.post("/login",  async (req, res) => {
  const { ID_EMPLOYEE, PASSWORD } = req.body;
  const JOB_TITLE = "Bibliothekar";

  const employee = await EMPLOYEE.findOne({ where: { ID_EMPLOYEE } });

  if (!employee) {
    res.json({ loggedIn: false, message: "ID nicht gefunden" });
  }

  if (JOB_TITLE === employee.JOB_TITLE) {
    if (PASSWORD === employee.PASSWORD) {
        const accessToken = sign({employee: employee.EMAIL_ADDRESS}, "~&Nc<SDtH}:uPjsW");
        res.send({ loggedIn: true, accessToken, id: employee.ID_EMPLOYEE});
    } else {
      res.json({
        loggedIn: false,
        message: "Ungültige Kombination aus ID und Passwort!",
      });
    }
  } else {
    res.json({
      loggedIn: false,
      message: "Id hat nicht die benötigten Berechtigungen",
    });
  }
});

module.exports = router;
