//자신한테 접속한 웹소켓 커넥션에 한에서 관리, redis를 통해서 어떤방에 어떤 업데이트가 있는지 오면, 자신이 속한 커넥션에 한에서 해당 방에 메세지 전달
var WebSocketServer = require('websocket').server;
const http = require('http');
const redis = require("redis");

const httpServer = http.createServer();
const client = redis.createClient();


const wsServer = new WebSocketServer({
    httpServer: httpServer,
    autoAcceptConnections:false
});

var rooms = {};

wsServer.on('request', function(request) {
    var connection = request.accept(null, request.origin);
    connection.on('message',function(message){
        //console.log(message);
        var room = message.utf8Data;
        connection.room = room;
        var connections = rooms[room];
        if(connections == null)
        {
            connections = [];
            rooms[room]=connections;

        }
        console.log("assign connection to " + room);
        connections.push(connection);
    });

    connection.on("close",function(){

        var connections = rooms[connection.room];
        if(connections == null) returnl
        var i =connections.indexOf(connection);
        connections.splice(i,1);
        console.log("close");

    });
    connection.send("check");
});


httpServer.listen(8888);
client.on("message",(channel, room)=>{
    console.log("on message",room);
    //wsServer.connections.forEach(c => c.send("check")); 
    var connections = rooms[room];
    if(connections == null) connections=[];
    console.log("send message to "+connections.length + "connections");
    connections.forEach(c => c.send("check")); 
});
client.subscribe("MESSAGE");

console.log("hello world");

 
