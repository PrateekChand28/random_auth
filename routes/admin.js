const {Router} = require("express")
const {adminModel, courseModel} = require("../db")
const adminRouter = Router()
const jwt = require("jsonwebtoken")
const {adminAuth} = require("../middlewares/adminMiddleware")
const JWT_ADMIN_PASSWORD = process.env.JWT_ADMIN_PASSWORD

// check it based on schema
adminRouter.post('/signup', async function(req, res){
    const {email, password, firstName, lastName} = req.body; // TODO: add zod validation
    //TODO: hash the password
    //TODO: error handling

    await adminModel.create({
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName
    })

    res.json({
        message: 'You are signed up'
    })
});

adminRouter.post('/signin', async function(req, res){
    const {email, password} = req.body

    // TODO: password should be hashed, and hence you can't compare the user provided password and the database password
    // Note: If you use just .find() instead of find one then it will look for all the users
    // and if none found returns an empty array and hence on every case will return back the token
    const admin = await adminModel.findOne({
        email: email,
        password: password
    })

    if (admin) {
        const token = jwt.sign({
            id: admin._id
        }, JWT_ADMIN_PASSWORD)
        res.json({
            token:token
        })
    } else {
        res.json({
            message: 'Incorrect Credentials'
        })
    }
});

adminRouter.post('/', adminAuth, async function(req, res){
    const adminId = req.userId;

    const {title, description, price, imageUrl} = req.body;

    // check out a web3 saas in 6 hrs vid to check how to upload image
    const course = await courseModel.create({
        title: title,
        description: description, 
        imageUrl: imageUrl,
        price: price,
        creatorId: adminId
    })

    res.json({
        message: 'course created',
        courseId: course._id
    })
});

adminRouter.put('/', adminAuth, async function(req, res){
    const adminId = req.userId;

    const {title, description, price, imageUrl, courseId} = req.body;

    console.log(req.body)
    

    console.log(title);
    console.log(description);
    console.log(price);
    console.log(imageUrl);
    console.log(courseId);
    
    // check out a web3 saas in 6 hrs vid to check how to upload image
    const course = await courseModel.updateOne({
        _id: courseId,
        // need to checlk for creator id because other admins may be able to change price
        creatorId: adminId
    }, {
        title: title,
        description: description, 
        imageUrl: imageUrl,
        price: price,
        creatorId: adminId
    })

    res.json({
        message: 'course created',
        courseId: course._id
    })
});

adminRouter.get('/bulk', adminAuth, async function(req, res){
    const adminId = req.userId;

    const course = await courseModel.find({
        creatorId: adminId
    })
    res.json({
        message: 'get all courses endpoint',
        course
    })
});

module.exports = {
    adminRouter: adminRouter
}

