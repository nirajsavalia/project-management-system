const StatusModel = require("../model/status-model")

//add [post]

module.exports.addstatus = function(req,res){

    let statusId = req.body.statusId
    let statusName = req.body.statusName

    let status = new StatusModel({
        statusId : statusId,
        statusName : statusName
    })

    status.save(function (err,data){
        if(err){
            res.json({msg:"SMW", data:err,status: -1})//-1 [302 404 500]          
        }else{
            res.json({msg: "signup done", data: data, status:200})
        }
    })
}

//list

module.exports.getAllStatus = function (req, res) {

    StatusModel.find(function (err, data) {
        if (err) {
            res.json({ msg: "Something Wrong", data: err, status: -1 })
        } else {
            res.json({ msg: "Data Retraive", data: data, status: 200 })
        }
    })
}


 //delete
module.exports.deleteStatus = function(req,res){
    let statusId = req.params.statusId

    StatusModel.deleteOne({_id:statusId},function (err, data) {
        if (err) {
            res.json({ msg: "Something Wrong", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "Delete Successfully", data: data, status: 200 })//http status code 
        }
    })
}
//update
module.exports.updateStatus = function(req,res){
    let statusId = req.body.statusId
    let statusName = req.body.statusName

    StatusModel.updateOne({_id:statusId},{statusName:statusName},function(err,data){
        if(err){
            res.json({msg:"Something Wrong",status:-1,data:req.body})
        }
        else{
            res.json({msg:"Data Updated",status:200,data:data})
        }
    })
}