const express = require("express");
const router = express.Router();
const { EMPLOYEE } = require("../models");
const { sign } = require("jsonwebtoken");

//gets all employees
router.get("/getallemployees", async (req, res) => {
  const allEmployees = await EMPLOYEE.findAll();
  res.json(allEmployees);
});

//login route
router.post("/login", async (req, res) => {
  const { ID_EMPLOYEE, PASSWORD } = req.body;
  const JOB_TITLE = "Bibliothekar";

  const employee = await EMPLOYEE.findOne({ where: { ID_EMPLOYEE } });
  console.log(employee);

  //login logic
  if (!employee) {
    res.json({ loggedIn: false, message: "ID nicht gültig" });
  } else {
    if (JOB_TITLE === employee.JOB_TITLE) {
      if (PASSWORD === employee.PASSWORD) {
        const accessToken = sign(
          { employee: employee.EMAIL_ADDRESS },
          "~&Nc<SDtH}:uPjsW"
        );
        res.send({ loggedIn: true, accessToken, id: employee.ID_EMPLOYEE });
      } else {
        res.json({
          loggedIn: false,
          message: "Ungültige Kombination aus ID und Passwort!",
        });
      }
    } else {
      res.json({
        loggedIn: false,
        message: "ID nicht gültig",
      });
    }
  }
});

module.exports = router;
