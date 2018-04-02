var express = require("express");
var app = express();
var fs = require("fs");
var gm = require("gm");

app.set("view engine","ejs");
app.use(express.static("./public"));

app.get("/",(req,res,next)=>{
    res.render("index")
})


app.get("/docut",(req,res,next)=>{
    // 接收请求 文件名 w,h,x,y
    var filename = req.query.filename;
    var w=  req.query.w;
    var h = req.query.h;
    var x = req.query.x;
    var y = req.query.y;

    gm("./picture/susu.jpeg")
    .crop(w, h, x, y)
    .resize(100, 100,"!")
    .write("./picture/susu1.jpeg",function(err){
        if(err){
            res.send("-1")
            return;
        }else{
            res.send("1")
        }
    })

})

app.listen("8888",()=>{console.log("server running at 127.0.0.1:8888")})
