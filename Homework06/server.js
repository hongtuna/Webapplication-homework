const express = require("express");
const app = express();
const moment = require("moment");


app.use(express.urlencoded({extended:true}));
app.set("views",__dirname + "/views");
app.set("view engine","ejs");
app.use(express.static('static'));//아래 해당되는거 외에는 static으로 넘겨줌

app.get("/", (request,response)=>{
    response.render("index",{time : moment().format("YYYY-MM-DD HH:mm:ss")
    });
});

app.post("/", (request,response)=>{
    //response.send("hello test");
    console.log(request.body);
    response.render("chat",{nick:request.body.nick});
});


app.listen(8080);
console.log("hello world");
