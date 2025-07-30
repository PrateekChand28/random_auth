const jwt = require('jsonwebtoken')
const JWT_SECRET = process.env.JWT_USER_PASSWORD

function userAuth(req, res, next){
    const token = req.headers.token
    const decoded = jwt.verify(token, JWT_SECRET)

    if(decoded){
        req.userId = token.userId
        next()
    } else {
        res.status(403).json({
            messgae: "Incorrect credentials"
        })
    }
}

module.exports = {
    userAuth
}