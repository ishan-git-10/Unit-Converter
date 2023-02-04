const express= require("express");
const ejs = require("ejs");
const lodash = require("lodash");

const app = express();

let length=["Centimeter", "Meter", "Foot", "Inch"];
let weight=["Gram", "Kilogram", "Pound", "Ounce"];
let temperature=["Celsius", "Fahrenheit", "Kelvin"];
let speed=["Kilometer/hour", "Meter/second", "Mile/hour"];

app.set('view engine', 'ejs');
app.use(express.static("public"));

app.get("/", function(req, res){
    res.redirect("/home");
});

app.get("/home", function(req, res){
    res.render("home");
});

app.get("/:entityName", function(req, res){
    let name= lodash.lowerCase(req.params.entityName);
    if(name=="length")
        res.render("convert",{Name:"Length",icon:"fa-ruler-horizontal", units:length});
    else if(name=="weight")
        res.render("convert",{Name:"Weight",icon:"fa-scale-balanced", units:weight});
    else if(name=="temperature")
        res.render("convert",{Name:"Temperature",icon:"fa-temperature-low", units:temperature});
    else if(name=="speed")
        res.render("convert",{Name:"Speed",icon:"fa-gauge-high", units:speed});
    else
        res.render("failed");
});

// app.post("/", function(req,res){
//     res.render("home");
// });

app.listen(process.env.PORT || 5500, function(){
    console.log("Server started at port 5500");
});
