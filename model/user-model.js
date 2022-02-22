const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({

    firstName:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    role:{
        type:mongoose.Schema.Types.ObjectId,
            ref:"role"
    }
})

const UserModel = mongoose.model("user",UserSchema)
module.exports = UserModel