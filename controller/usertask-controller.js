const UsertaskModel = require("../model/usertask-model")

//add [post]

module.exports.addusertask = function(req,res){

    let usertaskId = req.body.usertaskId
    let userId = req.body.userId
    let taskId = req.body.taskId
    
    let usertask = new taskModel({
        usertaskId : usertaskId,
        userId : userId,
        taskId : taskId
    })

    usertask.save(function (err,data){
        if(err){
            res.json({msg:"SMW", data:err,status: -1})//-1 [302 404 500]          
        }else{
            res.json({msg: "signup done", data: data, status:200})
        }
    })
}

//list

module.exports.getAllusertask = function (req, res) {

    UsertaskModel.find().populate("usertaskId").populate("taskId").exec(function (err, data) {
        if (err) {
            res.json({ msg: "Something Wrong", data: err, status: -1 })
        } else {
            res.json({ msg: "Data Retraive", data: data, status: 200 })
        }
    })
}


 //delete
module.exports.deleteusertask = function(req,res){
    let usertaskId = req.params.usertaskId

    UsertaskModel.deleteOne({_id:usertaskId},function (err, data) {
        if (err) {
            res.json({ msg: "Something Wrong", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "Delete Successfully", data: data, status: 200 })//http status code 
        }
    })
}
//update
module.exports.updateusertask = function(req,res){
    let usertaskId = req.body.usertaskId
    let userId = req.body.userId
    let taskId = req.body.taskId

    UsertaskModel.updateOne({_id:usertaskId},{userId:userId},{taskId:taskId},function(err,data){
        if(err){
            res.json({msg:"Something Wrong",status:-1,data:req.body})
        }
        else{
            res.json({msg:"Data Updated",status:200,data:data})
        }
    })
}