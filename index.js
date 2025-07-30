require("dotenv").config()
const express = require('express')
const mongoose = require('mongoose')

// a more tedious way of using route handling
//const {createUserRoutes} = require("./routes/user")
//const {createCourseRoutes} = require("./routes/course")

const {userRouter} = require("./routes/user")
const {courseRouter} = require("./routes/course")
const {adminRouter} = require("./routes/admin")

// Express router is a powerful feature that allows you to create modular, mountable route handlers.
// It is initially a mini-application that can handle middleware and routes.

const app = express();
// static files are files that are not processed by the server, they are just served as they are
app.use(express.static('public'));
// Middleware to parse JSON bodies
app.use(express.json());

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

// if any of the request come to use endpoint it automatically get routed to userRouter
// also all the prefixes and versions can be changed here instead of going to each end points and manually changing it
app.use("/api/v1/user", userRouter)
app.use("/api/v1/course", courseRouter)
app.use("/api/v1/admin", adminRouter)

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
async function main(){
    await mongoose.connect(process.env.MONGODB_URL)
    app.listen(3000);
    console.log("listenting on port 3000")
}

main()

// Things to do: cookie implementation, and frontend 