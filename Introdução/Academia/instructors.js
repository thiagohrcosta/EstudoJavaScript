const fs = require("fs");

// create

exports.post = function(req, res){
        // req.query
        // req.body => em decorrência do post
    
        const keys = Object.keys(req.body)
    
        for ( key of keys ) {
            // req.body.avatar_url  = res.body[key]
            if (req.body[key] == ""){
                return res.send("Por favor, preencha todos os campos!")
            }
        }

        fs.watchFile("data.json", JSON.stringify(req.body), function(err){
            if (err) return res.send("Write file error!")

            return res.redirect("instructors")

        })
    
        return res.send(req.body)
    
}

// update

// delete