const mongoose = require("mongoose")

const ProjectteamSchema = new mongoose.Schema({

    projectTeamId:{
        type:String,
        required:true
    },
    projectId:{
        type:mongoose.Schema.Types.ObjectId,
            ref:"project"
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
            ref:"user"
    }
})

const ProjectteamModel = mongoose.model("projectteam",ProjectteamSchema)
module.exports = ProjectteamModel