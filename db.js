//const {Schema, default: mongoose} = require("mongoose")
const mongoose = require("mongoose")
/*
console.log("Created DB")
mongoose.connect(process.env.MONGODB_URL)
*/

const Schema = mongoose.Schema
const ObjectId = mongoose.Types.ObjectId


// Schemas define the structur of the data (template): specifies what fields this document should have and what type of data
// goes in each field
const userSchema = new Schema({
    email: {type: String, unique:true},
    password: String,
    firstName: String,
    lastName: String
})

const adminSchema = new Schema({
    email: {type: String, unique:true},
    password: String,
    firstName: String,
    lastName: String
})

const courseSchema = new Schema({
    title: String,
    description: String,
    price: Number,
    imageUrl: String,
    creatorId: ObjectId
    
})

// explore references in mongoDB for future reference
const purchaseSchema = new Schema({
    userId: ObjectId,
    courseId: ObjectId
})

// models are constructor functions that creates and manages documents based on a schema
const userModel = mongoose.model("user", userSchema)
const adminModel = mongoose.model("admin", adminSchema)
const courseModel = mongoose.model("course", courseSchema)
const purchaseModel = mongoose.model("purchase", purchaseSchema)

module.exports = {
    userModel,
    adminModel,
    courseModel,
    purchaseModel
}