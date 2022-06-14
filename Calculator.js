///jshint esversion:6

const express = require('express')
const bodyParser = require("body-parser");

const app = express()
app.use(express.urlencoded());


app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
});



app.post("/",function(req,res)  {
    var num1 = Number(req.body.n1);
    var num2 = Number(req.body.n2);

    var result = num1 + num2
    res.send("Adding both the numbers we get: "+result);
    
});

app.listen(3000,function(){
    console.log("Server is running on Port 3000");
});

app.get("/bmicalculator",function(req,res){
    res.sendFile(__dirname+"/bmiCalculator.html");
});
app.post("/bmicalculator",function(req,res){
    var n1= parseFloat(req.body.n1);
    var n2 = parseFloat(req.body.n2);
    var bmi = (n1/(n2*n2));
    res.send("Your BMI is "+bmi);
}); 