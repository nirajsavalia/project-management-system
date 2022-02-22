// const bcrypt = require("bcrypt")
const UserModel = require("../model/user-model")

//add [post]

module.exports.addUser = function(req,res){

    let firstName = req.body.firstName
    let email = req.body.email
    let password = req.body.password
    let role = req.body.role

    // let encPassword = bcrypt.hashSync(password,10)

    let user = new UserModel({
        firstName: firstName,
        email: email,
        password: password,
        role: role
    })

    user.save(function (err,data){
        if(err){
            res.json({msg:"Somethiing Wrong...", data:err,status: -1})//-1 [302 404 500]          
        }else{
            res.json({msg: "signup done", data: data, status:200})
        }
    })
}

//list

module.exports.getAllUsers = function (req, res) {

    UserModel.find().populate("role").exec(function (err, data) {
        if (err) {
            res.json({ msg: "Somethiing Wrong...", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "Data Retraive", data: data, status: 200 })//http status code 
        }
    })
}


//delete
module.exports.deleteUser = function(req,res){
    //params userid 
    let userId = req.params.userId //postman -> userid 

    UserModel.deleteOne({_id:userId},function (err, data) {
        if (err) {
            res.json({ msg: "Somethiing Wrong...", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "user removed...", data: data, status: 200 })//http status code 
        }
    })
}

//update user data
module.exports.updateUser = function(req,res){
    let userId = req.body.userId
    let firstName = req.body.firstName
    let password = req.body.password
    let isActive = req.body.isActive

    UserModel.updateOne({_id:userId},{firstName:firstName},{password:password},function(err,data){
        if(err){
            res.json({msg:"Somethiing Wrong...",status:-1,data:req.body})
        }else{
            res.json({msg:"Data Updated",status:200,data:data})
        }
    })
}


module.exports.login = function(req,res){

    let param_email = req.body.email
    let param_password  = req.body.password 

    let isCorrect = false; 

    UserModel.findOne({email:param_email},function(err,data){
        if(data){
            let ans =  bcrypt.compareSync(param_password,data.password)
            if(ans == true){
                    isCorrect = true
            }
        }
    
        if (isCorrect == false) {
            res.json({ msg: "Invalid Email/Password...", data: req.body, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "Login....", data: data, status: 200 })//http status code 
        }
    })

}