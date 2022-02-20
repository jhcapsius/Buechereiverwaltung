const express = require("express");
const router = express.Router();
const { EMPLOYEE } = require("../models");

router.post("/login", async (req, res) =>{
    const ID_EMPLOYEE = req.body.id;
    const PASSWORD = req.body.password;
    const JOB_TITLE = 'Bibliothekar';

    
    try{
        const employee = await EMPLOYEE.findOne({where: {ID_EMPLOYEE}});

        if(employee != null){
            if(employee.JOB_TITLE === JOB_TITLE){
                if(employee.PASSWORD === PASSWORD){
                    res.send({loggedIn: true})
                }else{
                    res.json({loggedIn: false, message: "Ungültige Kombination aus ID und Passwort!"})
                }
            }else{
                res.json({loggedIn: false, message: "Id hat nicht die benötigten Berechtigungen"})
            }
        }else{
            res.json({loggedIn: false, message: "ID nicht gefunden"})
        }
        
    }catch(err){
        console.log(err);
    }
})

module.exports = router;