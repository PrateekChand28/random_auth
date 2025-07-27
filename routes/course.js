const {Router} = require("express")

const courseRouter = Router()

courseRouter.post('/purchase', function(req, res){
    // TODO: purchase access
    res.json({
        message: 'signin endpoint'
    })
});


// Lists all the current courses
courseRouter.get('/preview', function(req, res){
    res.json({
        message: 'signin endpoint'
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