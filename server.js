//Lets require/import the HTTP module
var express = require("express");
var app     = express();
var path    = require("path");
var getData = require("./services/getData.js");

app.use("/src", express.static(__dirname + '/src'));
app.use("/css", express.static(__dirname + '/css'));
app.use("/Templates", express.static(__dirname + '/Templates'));
app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
});
app.get('/getCourses', function(req, res) {
    var data = getData.getDataFromFile('./json/courses.json');
    res.send(data);
});
app.get('/getStudentInfo', function(req, res) {
    var data = getData.getDataFromFile('./json/studentInfo.json');
    res.send(data);
});

app.listen(3000);

console.log("Running at Port 3000");
