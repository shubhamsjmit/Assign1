var express = require("express");
var app=express();
var moment=require("moment");
var bodyParser=require("body-parser");
app.set("view engine","pug");
app.set("views", "./views");
app.use("/", bodyParser.urlencoded({extended : false}));

//app.use("/", express.static(__dirname + "/Ques2"));
app.use("/assets/form.html",express.static(__dirname+"/Ques2/form.html"));
app.use("/forms",express.static(__dirname+"/Ques2/form.html"));

app.post("/submit",function (req,res) {
    var fname=req.body.firstname;
    var lnmae=req.body.lastname;
    var dob=req.body.dob;
    var b_date=moment(dob);
    var t_date=moment(Date.now());
    var diff=t_date.diff(b_date,"days");
    console.log(b_date);
    console.log(t_date);
    res.render("index",{
        message:"Hi "+fname+" "+lnmae+", "+"you have lived on this planet for "+diff+" no of days"
    });
});
app.listen(3000);