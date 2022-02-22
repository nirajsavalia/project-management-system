const mongoose = require("mongoose")

const StatusSchema = new mongoose.Schema({

    statusId:{
        type:String,
        required:true
    },
    statusName:{
        type:String,
        required:true
    }
    
})

const StatusModel = mongoose.model("status",StatusSchema)
module.exports = StatusModel