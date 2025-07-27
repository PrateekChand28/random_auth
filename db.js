const {Schema} = require("mongoose")


// Schemas define the structur of the data (template): specifies what fields this document should have and what type of data
// goes in each field
const userSchema = Schema({

})

const adminSchema = Schema({
    
})

const courseSchema = Schema({
    
})

const purchaseSchema = Schema({
    
})

// models are constructor functions that creates and manages documents based on a schema
const userModel = mongoose.Model("user", userSchema)
const adminModel = mongoose.Model("admin", adminSchema)
const courseModel = mongoose.Model("admin", courseSchema)
const purchaseModel = mongoose.Model("admin", purchaseSchema)
