const express = require("express");
const nunjucks = require("nunjucks")

const server = express();
const videos = require("./data");

server.use(express.static("public"))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server
})

server.get("/", function(req, res){
    return res.render("about")
})

server.get("/courses", function(req, res){
    return res.render("courses")
})

server.listen(5000, function(){
    console.log("Server is running on port 5000.")
});

