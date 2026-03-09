const jwt = require('jsonwebtoken');
const jwt_secret = 'hellBoy123@';

const verifyToken = async(req,res,next)=>{
    try {
        let token = req.headers.authorization;
        let verify = jwt.verify(token,jwt_secret )  //{_id:34567}
        req.user = verify._id
        next()
    } catch (error) {
        return res.statu(401).json({msg:"unauthorized"})
    }

}

module.exports = verifyToken