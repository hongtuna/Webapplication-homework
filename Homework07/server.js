const express = require("express");
const app = express();
const moment = require("moment");
var WebSocketServer = require('websocket').server;
const http = require('http');


const httpServer = http.createServer(app);


const wsServer = new WebSocketServer({
    httpServer: httpServer,
    autoAcceptConnections:false
});

wsServer.on('request', function(request) {
    var connection = request.accept(null, request.origin);
    connection.on('message',function(message){
        console.log(message);
    });
    connection.send("check");
});



const messages = [];

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.set("views",__dirname + "/views");
app.set("view engine","ejs");
app.use(express.static('static'));//아래 해당되는거 외에는 static으로 넘겨줌

app.get("/", (request,response)=>{
    response.render("index",{time : moment().format("YYYY-MM-DD HH:mm:ss").toString()
    });
});

app.post("/api/send", (req, res)=>{
    console.log("api test", req.body.nick, req.body.place, req.body.message);
    
    messages.push({
        date:new Date().getTime(),
        nick:req.body.nick,
        place:req.body.place,
        message:req.body.message
    });
     
    res.json({});
    wsServer.connections.forEach(c => c.send("check")); //접속중인 모든 connection에 check

});

app.get("/api/messages", (req, res)=>{
    res.json(messages);
});

app.post("/api/pull", (req, res)=>{
    var newMessages = messages.filter(data=>data.date >req.body.date);
    res.json(newMessages);
})

// app.post("/", (request,response)=>{
//     //response.send("hello test");
//     console.log(request.body);
//     response.render("chat",{nick:request.body.nick});
// });





httpServer.listen(8080);
//app.listen(8080);
console.log("hello world");

 
