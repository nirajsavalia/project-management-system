const PromoduleModel = require("../model/promodule-model")

//add [post]

module.exports.addpromodule = function(req,res){

    let moduleId = req.body.moduleId
    let projectId = req.body.projectId
    let moduleName = req.body.moduleName
    let description = req.body.description
    let estimatedHours  = req.body.estimatedHours 
    let status = req.body.status
    let startDate = req.body.startDate

    let promodule = new StatusModel({
        moduleId : moduleId,
        projectId : projectId,
        moduleName : moduleName,
        description : description,
        estimatedHours : estimatedHours ,
        status : status,
        startDate : startDate
    })

    promodule.save(function (err,data){
        if(err){
            res.json({msg:"SMW", data:err,status: -1})//-1 [302 404 500]          
        }else{
            res.json({msg: "signup done", data: data, status:200})
        }
    })
}

//list

module.exports.getAllProjectModule = function (req, res) {

    PromoduleModel.find().populate("moduleId").populate("projectId").populate.exec(function (err, data) {
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

    PromoduleModel.deleteOne({_id:projectTeamId},function (err, data) {
        if (err) {
            res.json({ msg: "Something Wrong", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "Delete Successfully", data: data, status: 200 })//http status code 
        }
    })
}
//update
module.exports.updateproject = function(req,res){
    let moduleId = req.body.moduleId
    let moduleName = req.body.moduleName
    let description = req.body.description

    PromoduleModel.updateOne({_id:moduleId},{moduleName:moduleName},{description:description},function(err,data){
        if(err){
            res.json({msg:"Something Wrong",status:-1,data:req.body})
        }
        else{
            res.json({msg:"Data Updated",status:200,data:data})
        }
    })
}