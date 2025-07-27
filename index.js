const express = require('express')

const app = express();

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
app.get('/courses', function(req, res){
    res.json({
        message: 'signin endpoint'
    })
});

app.listen(3000);