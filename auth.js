const jwt = require('jsonwebtoken')
const JWT_USER_PASSWORD = "secret"
const JWT_ADMIN_PASSWORD = "secret2"

function auth(req, res, next){
    const token = req.headers.authorization
    const response = jwt.verify(token, JWT_SECRET)

    if(response){
        req.userId = token.userId
        next()
    } else {
        res.status(403).json({
            messgae: "Incorrect credentials"
        })
    }
}

module.exports = {
    auth,
    JWT_USER_PASSWORD,
    JWT_ADMIN_PASSWORD
}