const jwt = require('jsonwebtoken');
const jwtSecret = 'abc@123'

const Auth = (req)=>{
    let token = req.headers.authroziation;
    if(!token){
        return null
    }
    else{
        let decoded = jwt.verify(token , jwtSecret);
        return decoded
    }
}

module.exports = Auth;
