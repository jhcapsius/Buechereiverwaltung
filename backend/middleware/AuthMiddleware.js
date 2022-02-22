const {verify} = require("jsonwebtoken");

const validateToken = (req, res, next) => {
    const accessToken = req.header("accessToken");
    console.log(accessToken);
    if(!accessToken) {
        return res.json({error: "User nicht eingeloggt"})
    }

    try{
        const validToken = verify(accessToken, "~&Nc<SDtH}:uPjsW");

        if(validToken){
            return next();
        }

    }catch(err){
        res.json({error: err});

    }
}

module.exports = {validateToken};