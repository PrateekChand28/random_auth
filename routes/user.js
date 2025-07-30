
//const Router = express.Router
const {Router} = require("express") // express returns an object
const userRouter = Router();
const {userModel, purchaseModel} = require("../db");
const { userAuth } = require("../middlewares/userMiddleware");
const jwt = require('jsonwebtoken')
const JWT_USER_PASSWORD = process.env.JWT_USER_PASSWORD

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
userRouter.post('/signup', async function(req, res){
    const {email, password, firstName, lastName} = req.body; // TODO: add zod validation
    //TODO: hash the password
    //TODO: error handling

    await userModel.create({
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName
    })

    res.json({
        message: 'You are signed up'
    })
});

userRouter.post('/signin', async function(req, res){
    const {email, password} = req.body

    // TODO: password should be hashed, and hence you can't compare the user provided password and the database password
    // Note: If you use just .find() instead of find one then it will look for all the users
    // and if none found returns an empty array and hence on every case will return back the token
    const user = await userModel.findOne({
        email: email,
        password: password
    })

    if (user) {
        const token = jwt.sign({
            id: user._id
        }, JWT_USER_PASSWORD)
        res.json({
            token:token
        })
    } else {
        res.json({
            message: 'Incorrect Credentials'
        })
    }

});

// list of courses specific to the user
userRouter.get('/purchases', userAuth, async function(req, res){
    const userId = req.userId

    const purchases = await purchaseModel.find({
        userId,
    })
    res.json({
        purchases
    })
});

module.exports = {
    userRouter: userRouter
}