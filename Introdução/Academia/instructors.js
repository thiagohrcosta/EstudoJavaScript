const fs = require("fs");
const data = require("./data.json");

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

        req.body.birth = Date.parse(req.body.birth);
        req.body.created_at = Date.now();

        // []
        data.instructors.push(req.body);  // [{...}]

        fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err){
            if (err) return res.send("Write file error!")

            return res.redirect("/instructors");

        })
    
        // return res.send(req.body)
    
}

// update

// delete