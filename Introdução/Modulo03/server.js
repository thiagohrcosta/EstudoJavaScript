const express = require("express");
const server = express();

server.get("/", function(req, res){
    return res.send("Olá! Usando NODEMON")
} )

server.listen(5000, function(){
    console.log("Server is running on port 5000.")
});

