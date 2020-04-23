/*
const http = require("http");

var app = http.createServer((request, response) => {
    console.log("Call",request.url);

    if(request.url=="/index.html")
    {
        response.writeHead(200);
        response.end("<html><body style='color:red'>hello index</html></body>");
        return;

    }else if(request.url == "/test")
    {
        response.writeHead(200);
        response.end("<html><body>hello test</html></body>");
        return;
    }
    response.writeHead(404);
    response.end();
});

app.listen(8080);

*/

const express = require("express");
const app = express();



app.set("views",__dirname + "/views");
app.set("view engine","ejs");


app.get("/", (request,response)=>{
    //response.send("hello world");
    response.render("index",{
        text : new Date().toString()//"Hello Web"
    });
});

app.get("/test", (request,response)=>{
    //response.send("hello test");
    response.render("index",{text:null});
});


app.listen(8080);
console.log("hello world");