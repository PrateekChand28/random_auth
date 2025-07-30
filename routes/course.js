const {Router} = require("express");
const { purchaseModel } = require("../db");
const {userAuth} = require("../middlewares/userMiddleware")

const courseRouter = Router()

courseRouter.post('/purchase', userAuth, async function(req, res){
    // TODO: purchase access
    const userId = req.userId
    const courseId = req.body.courseId

    // check if the user has paid
    await purchaseModel.create({
        userId,
        courseId
    })

    res.json({
        message: 'You have successfully bought the course'
    })
});


// Lists all the current courses
courseRouter.get('/preview', async function(req, res){

    const courses = await courseModel.find({});
    res.json({
        courses
    })
});

/*
function createCourseRoutes(app){
    app.post('/course/purchase', function(req, res){
        // TODO: purchase access
        res.json({
            message: 'signin endpoint'
        })
    });
    
    
    // Lists all the current courses
    app.get('/course/preview', function(req, res){
        res.json({
            message: 'signin endpoint'
        })
    });
}

module.exports = {
    createCourseRoutes: createCourseRoutes
}
*/

module.exports = {
    courseRouter: courseRouter
}