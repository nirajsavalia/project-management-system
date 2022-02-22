const express = require("express")
const mongoose = require("mongoose")

const sessionController = require("./controller/session-controller")
const roleController = require("./controller/role-controller")
const userController = require("./controller/user-controller")
const projectController = require("./controller/project-controller")
const projectteamcontroller = require("./controller/projteam-controller")
const statuscontroller = require("./controller/status-controller")
const promodulecontroller = require("./controller/promodule-controller")
const taskcontroller = require("./controller/task-controller")
const usertaskcontroller = require("./controller/usertask-controller")

const app = express()
//middle ware 
app.use(express.json()) //mobile -> accept json data from request and set data into body 
app.use(express.urlencoded({extended:true})) //web --> accept url encoded data from request and set data into body  


//database 
mongoose.connect('mongodb://localhost:27017/pms',function(err){
  if(err){
    console.log("db connection fai .. .. . ");
    console.log(err);
  }else{

    console.log("db Connected....");
  }
})

//urls 

app.get("/",function(req,res){
    res.write("welcome...")
    res.end()
})

          
app.get("/login",sessionController.login)
app.get("/signup",sessionController.signup) 
app.post("/saveuser",sessionController.saveuser)


//role 
app.post("/roles",roleController.addRole)
app.get("/roles",roleController.getAllRoles)
app.delete("/roles/:roleId",roleController.deleteRole)
app.put("/roles",roleController.updateRole)

//user 
app.post("/users",userController.addUser)
app.get("/users",userController.getAllUsers)
app.delete("/users/:userId",userController.deleteUser)
app.put("/users",userController.updateUser)
//user-login
app.post("/login",userController.login)



//project
app.post("/project",projectController.addproject)
app.get("/project",projectController.getAllProject)
app.delete("/project",projectController.deleteProject)
app.put("/project",projectController.updateproject)


//project team
app.post("/projectteam",projectteamcontroller.addprojectteam)
app.get("/projectteam",projectteamcontroller.getAllProjectMember)
app.delete("/projectteam",projectteamcontroller.deleteProjectteamMember)

// status
app.post("/status",statuscontroller.addstatus)
app.get("/status",statuscontroller.getAllStatus)
app.delete("/status",statuscontroller.deleteStatus)
app.put("/status",statuscontroller.updateStatus)

//project module controler
app.post("/project-module",promodulecontroller.addpromodule)
app.get("/project-module",promodulecontroller.getAllProjectModule)
app.delete("/project-module",promodulecontroller.deleteProjectteamMember)
app.put("/project-module",promodulecontroller.updateproject)

//task
app.post("/task",taskcontroller.addtask)
app.get("/task",taskcontroller.getAlltask)
app.delete("/task",taskcontroller.deleteTask)
app.put("/task",taskcontroller.updatetask)

//user task
app.post("/usertask",usertaskcontroller.addusertask)
app.get("/usertask",usertaskcontroller.getAllusertask)
app.delete("/usertask",usertaskcontroller.deleteusertask)
app.put("/usertask",usertaskcontroller.updateusertask)

//server 

app.listen(3000,function(){
  console.log("server started on 3000");  
})