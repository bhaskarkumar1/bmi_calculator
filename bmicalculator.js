const express= require("express")
const app =express();
// body parser
const bodyParser= require("body-parser")
app.use(bodyParser.urlencoded({extended:true}));


app.get("/",function(req,res){
  res.sendFile(__dirname +"/index.html");
});

// create post request on server
app.post("/",function(req,res){
// console.log(req.body);
var weight=Number(req.body.weight);
var height=Number(req.body.Height);
var result= weight/(height*height);
res.send("Your Calculated BMI is " + result);
});



app.listen(3000,function(req, res){
  console.log("Server Started on port 3000");
});
