const jwt = require('jsonwebtoken')
const JWT_SECRET = process.env.JWT_ADMIN_PASSWORD

function adminAuth(req, res, next){
    console.log('All headers:', req.headers)
    console.log('Authorization header:', req.headers.authorization)

    const token = req.headers.token
    const decoded = jwt.verify(token, JWT_SECRET)

    if(decoded){
        req.userId = decoded.id
        next()
    } else {
        res.status(403).json({
            messgae: "Incorrect credentials"
        })
    }
}  

module.exports = {
    adminAuth
}