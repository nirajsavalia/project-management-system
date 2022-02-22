const mongoose = require("mongoose")

const PromoduleSchema = new mongoose.Schema({

    moduleId:{
        type:String,
        required:true
    },
    projectId:{
        type:mongoose.Schema.Types.ObjectId,
            ref:"project"
    },
    moduleName:{
        type:String
    },
    description:{
        type:String
    },
    estimatedHours:{
        type:String
    },
    status:{
        type:mongoose.Schema.Types.ObjectId,
            ref:"status"
    },
    startDate:{
        type:String
    }
})

const PromoduleModel = mongoose.model("project-module",PromoduleSchema)
module.exports = PromoduleModel