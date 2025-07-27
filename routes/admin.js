const {Router} = require("express")
const {adminModel} = require("../db")

const adminRouter = Router()

adminRouter.post('/signup', function(req, res){
    res.json({
        message: 'signup endpoint'
    })
});

adminRouter.post('/signin', function(req, res){
    res.json({
        message: 'signin endpoint'
    })
});

adminRouter.post('/', function(req, res){
    res.json({
        message: 'create course endpoint'
    })
});

adminRouter.put('/', function(req, res){
    res.json({
        message: 'update course endpoint'
    })
});

adminRouter.get('/bulk', function(req, res){
    res.json({
        message: 'get all courses endpoint'
    })
});

module.exports = {
    adminRouter: adminRouter
}