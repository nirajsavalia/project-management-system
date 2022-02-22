const taskModel = require("../model/task-model")

//add [post]

module.exports.addtask = function(req,res){

    let taskId = req.body.taskId
    let moduleId = req.body.moduleId
    let projectId = req.body.projectId
    let title = req.body.title
    let priority  = req.body.priority
    let discription = req.body.discription
    let statusId = req.body.statusId
    let totalMinutes = req.body.totalMinutes


    let task = new taskModel({
        taskId : taskId,
        moduleId : moduleId,
        projectId : projectId,
        title : title,
        priority : priority ,
        discription : discription,
        statusId : statusId,
        totalMinutes : totalMinutes

    })

    task.save(function (err,data){
        if(err){
            res.json({msg:"SMW", data:err,status: -1})//-1 [302 404 500]          
        }else{
            res.json({msg: "signup done", data: data, status:200})
        }
    })
}

//list

module.exports.getAlltask = function (req, res) {

    taskModel.find().populate("taskId").populate("moduleId").populate("projectId").populate("statusId").exec(function (err, data) {
        if (err) {
            res.json({ msg: "Something Wrong", data: err, status: -1 })
        } else {
            res.json({ msg: "Data Retraive", data: data, status: 200 })
        }
    })
}


 //delete
module.exports.deleteTask = function(req,res){
    let taskId = req.params.taskId

    taskModel.deleteOne({_id:taskId},function (err, data) {
        if (err) {
            res.json({ msg: "Something Wrong", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "Delete Successfully", data: data, status: 200 })//http status code 
        }
    })
}
//update
module.exports.updatetask = function(req,res){
    let taskId = req.body.taskId
    let moduleId = req.body.moduleId
    let projectId = req.body.projectId
    let discription = req.body.discription

    taskModel.updateOne({_id:taskId},{moduleId:moduleId},{projectId:projectId},{discription:discription},function(err,data){
        if(err){
            res.json({msg:"Something Wrong",status:-1,data:req.body})
        }
        else{
            res.json({msg:"Data Updated",status:200,data:data})
        }
    })
}