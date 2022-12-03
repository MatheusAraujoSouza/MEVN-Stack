const Users = require('../../models/users');
const jwt = require('jsonwebtoken');


module.exports = async (req,res,next)=>{
    try {
        if(!req.headers['authorization']){
            return res.status(401).json("Error in access token authorization mode does not contain in header");
        }
        const token = req.headers['authorization'].split(' ');

        if(token[0] !== 'admin'){
            return res.status(401).json("User is not Admin");
        }

        const user = await jwt.verify(token[1], 'SECRET@#$_11111_&¨%$%&&*&')
        req.body.user = await Users.findOne({
            username:user.username
        })

        next()
    } catch (error) {
        return res.status(401).json("Token is not valid");
        
    }

}