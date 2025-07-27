
//const Router = express.Router
const {Router} = require("express") // express returns an object

const userRouter = Router();

/*
function createUserRoutes(app){
    app.post('/signup', function(req, res){
        res.json({
            message: 'signup endpoint'
        })
    });

    app.post('/signin', function(req, res){
        res.json({
            message: 'signin endpoint'
        })
    });

    // list of courses specific to the user
    app.get('/purchases', function(req, res){
        res.json({
            message: 'signin endpoint'
        })
    });
}
*/
userRouter.post('/signup', function(req, res){
    res.json({
        message: 'signup endpoint'
    })
});

userRouter.post('/signin', function(req, res){
    res.json({
        message: 'signin endpoint'
    })
});

// list of courses specific to the user
userRouter.get('/purchases', function(req, res){
    res.json({
        message: 'signin endpoint'
    })
});

module.exports = {
    userRouter: userRouter
}