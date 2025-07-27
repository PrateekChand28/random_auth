const express = require('express')

// a more tedious way of using route handling
//const {createUserRoutes} = require("./routes/user")
//const {createCourseRoutes} = require("./routes/course")

const {userRouter} = require("./routes/user")
const {courseRouter} = require("./routes/course")
const {adminRouter} = require("./routes/admin")

// Express router is a powerful feature that allows you to create modular, mountable route handlers.
// It is initially a mini-application that can handle middleware and routes.

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// if any of the request come to use endpoint it automatically get routed to userRouter
// also all the prefixes and versions can be changed here instead of going to each end points and manually changing it
app.use("/user", userRouter)
app.use("/course", courseRouter)
app.use("/admin", adminRouter)

//createUserRoutes(app);
//createCourseRoutes(app);

/*
app.post('/user/signup', function(req, res){
    res.json({
        message: 'signup endpoint'
    })
});

app.post('/user/signin', function(req, res){
    res.json({
        message: 'signin endpoint'
    })
});

// list of courses specific to the user
app.get('/user/purchases', function(req, res){
    res.json({
        message: 'signin endpoint'
    })
});

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

*/

app.listen(3000);