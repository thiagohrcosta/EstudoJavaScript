const express = require("express");
const routes = express.Router();

routes.get("/", function(req, res){
    return res.redirect("/instructors");
})

routes.get("/instructors", function(req, res){
    return res.render("instructors/index")
})

routes.get("/instructors/create", function(req, res){
    return res.render('instructors/create')
})

routes.post("/instructors", function(req, res){
    // req.query
    // req.body => em decorrência do post

    const keys = Object.keys(req.body)

    for ( key of keys ) {
        // req.body.avatar_url  = res.body[key]
        if (req.body[key] == ""){
            return res.send("Por favor, preencha todos os campos!")
        }
    }

    return res.send(req.body)

    // return res.send(keys)
})

routes.get("/members", function(req, res){
    return res.send("members")
})

module.exports = routes;