const ProjectModel = require("../model/project-model")

//add [post]

module.exports.addproject = function(req,res){

    let projectId = req.body.projectId
    let title = req.body.title
    let description = req.body.description
    let technology = req.body.technology
    let estimatedHours = req.body.estimatedHours
    let startDate = req.body.startDate
    let completionDate = req.body.completionDate

    let project = new ProjectModel({
        projectId : projectId,
        title : title,
        description : description,
        technology : technology,
        estimatedHours : estimatedHours,
        startDate : startDate,
        completionDate : completionDate
    })

    project.save(function (err,data){
        if(err){
            console.log(err);
            res.json({msg:"Something Wrong", data:err,status: -1})       
        }else{
            res.json({msg: "Project added", data: data, status:200})
        }
    })
}

//list

module.exports.getAllProject = function (req, res) {

    ProjectModel.find().populate("status").exec(function (err, data) {
        if (err) {
            res.json({ msg: "Something Wrong", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "Data Retraive", data: data, status: 200 })//http status code 
        }
    })
}


// //delete
module.exports.deleteProject = function(req,res){
    let projectId = req.params.projectId //postman -> userid 

    projectModel.deleteOne({_id:projectId},function (err, data) {
        if (err) {
            res.json({ msg: "Something Wrong", data: err, status: -1 })
        } else {
            res.json({ msg: "Delete Successfully", data: data, status: 200 })
        }
    })
}

//update
module.exports.updateproject = function(req,res){
    let projectId = req.body.projectId
    let projectTitle = req.body.projectTitle
    let description = req.body.description

    ProjectModel.updateOne({_id:projectId},{projectTitle:projectTitle},{description:description},function(err,data){
        if(err){
            res.json({msg:"Something Wrong",status:-1,data:req.body})
        }
        else{
            res.json({msg:"Data Updated",status:200,data:data})
        }
    })
}