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
    
        return res.send(req.body)
    
}

// update

// delete