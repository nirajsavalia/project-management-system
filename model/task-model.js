const mongoose = require("mongoose")

const TaskSchema = new mongoose.Schema({

    taskId:{
        type:String,
        required:true
    },
    moduleId:{
        type:mongoose.Schema.Types.ObjectId,
            ref:"project-module"
    },
    projectId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"project"
    },
    title:{
        type:String,
        required:true
    },
    priority:{
        type:String,
        required:true
    },
    discription:{
        type:String,
        required:true
    },
    statusId:{
        type:mongoose.Schema.Types.ObjectId,
            ref:"status"
    },
    totalMinutes:{
        type:String
    }
})

const taskModel = mongoose.model("task",TaskSchema)
module.exports = taskModel