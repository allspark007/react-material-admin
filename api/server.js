var express = require('express')
var bodyparser = require('body-parser')
var path = require('path')
var sidebar = require('./sidebar.json')
const app = express()

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, x-timebase"
    );
    if (req.method === "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
        return res.status(200).json({});
    }
    next();
});
app.post("/api/user/login",function(req,res){
    var data = req.body
    if(data.username == "test" && data.password == "test")
    {
        res.send({
            success:true,
            info:{
                organization:"organization",
                role:'admin'
            }
        })
    }
    else
    {
        res.send({
            success:false,
            error:"Username or Password is incorrect"
        })
    }
})

app.get('/api/sidebar',function(req,res){
    res.send(sidebar)
})

app.listen(5000,function(){
    console.log("server is listening in 5000 port")
})