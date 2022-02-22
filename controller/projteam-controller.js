const ProjectteamModel = require("../model/projteam-model")

//add [post]

module.exports.addprojectteam = function(req,res){

    let projectTeamId = req.body.projectTeamId
    let projectId = req.body.projectId
    let userId = req.body.userId
    
    let projectteam = new ProjectteamModel({
        projectTeamId : projectTeamId,
        projectId : projectId,
        userId : userId
    })

    projectteam.save(function (err,data){
        if(err){
            res.json({msg:"SMW", data:err,status: -1})//-1 [302 404 500]          
        }else{
            res.json({msg: "signup done", data: data, status:200})
        }
    })
}

//list

module.exports.getAllProjectMember = function (req, res) {

    ProjectteamModel.find().populate("projectTeamId").populate("projectId").populate("userId").exec(function (err, data) {
        if (err) {
            res.json({ msg: "Something Wrong", data: err, status: -1 })
        } else {
            res.json({ msg: "Data Retraive", data: data, status: 200 })
        }
    })
}


 //delete
module.exports.deleteProjectteamMember = function(req,res){
    let projectTeamId = req.params.projectTeamId

    ProjectteamModel.deleteOne({_id:projectTeamId},function (err, data) {
        if (err) {
            res.json({ msg: "Something Wrong", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "Delete Successfully", data: data, status: 200 })//http status code 
        }
    })
}

//update
/*module.exports.updateprojectTeam = function(req,res){
    let projectTeamId = req.body.projectTeamId
    ProjectTeamModel.updateOne({_id:projectTeamId},function(err,data){
        if(err){
            res.json({msg:"Something Wrong",status:-1,data:req.body})
        }
        else{
            res.json({msg:"Data Updated",status:200,data:data})
        }
    })
}*/