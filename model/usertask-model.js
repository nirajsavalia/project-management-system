const mongoose = require("mongoose")

const UsertaskSchema = new mongoose.Schema({

    usertaskId:{
        type:String,
        required:true
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    taskId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"task"
    }
})

const UsertaskModel = mongoose.model("usertask",UsertaskSchema)
module.exports = UsertaskModel