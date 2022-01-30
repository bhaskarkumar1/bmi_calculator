const express= require("express")
const app =express();



app.get("/",function(req,res){
  res.sendFile(__dirname +"/index.html");
})



app.listen(3000,function(req, res){
  console.log("Server Started on port 3000");
})
