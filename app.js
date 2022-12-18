
const express = require("express");
const bodyParser = require("body-parser");
const https = require('https');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/" ,function(req,res){

res.sendFile(__dirname + "/index.html")



});





app.post("/" ,function(req,res){

const querry = req.body.cityName;

const apikey ="c98bae96e170813bf610d42f588c10c4"

const unit = "metric"

 const url ="https://api.openweathermap.org/data/2.5/weather?q=" + querry + "&appid=" + apikey + "&units=" + unit;


https.get(url ,function(response){
console.log(response.statusCode);


response.on("data", function(data){

    const weatherData= JSON.parse(data);
    const temp = weatherData.main.temp;
    const visi = weatherData.visibility;
  res.write("<h1>The visibility of  is " + visi + "</h1> ")  ; 
res.write("<h2> And the temp  in " + querry + " is " + temp + "degree celsius </h2>");
   res.send();
});
});
});















app.listen(3000,function(){

    console.log('server is running on port 3000.');
});