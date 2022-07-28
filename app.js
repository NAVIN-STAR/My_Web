const { response } = require("express");
const mqtt = require("mqtt");
const express = require("express");
const client =mqtt.connect('mqtt://broker.hivemq.com');
const bodyParser =require("body-parser");
const app=express();
const port = process.env.PORT || 8080;


//middlewares
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function (req,res)
{
    res.render("index.html");
    
});

let command;
app.post("/",function (req,res){
   command=req.body.command;
   if(command=="on" || command=="ON"){
    client.publish("internet","on");
    res.send("Led is on.");
   }
   else if( command=="off" || command=="OFF")
   {
    client.publish("internet","off");
    res.send("Led is off");
   }
})

app.listen(port);
