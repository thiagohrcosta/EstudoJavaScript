const express = require("express");
const nunjucks = require("nunjucks")

const server = express();
const videos = require("./data");

server.use(express.static("public"));

server.set("view engine", "njk");

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true,
})

server.get("/", function(req, res){
    const about = {
        avatar_url: "https://avatars3.githubusercontent.com/u/28869405?s=460&v=4",
        name: "Thiago Costa",
        role: "Full Stack Developer, passionate about Data Science",
        description: 'Systems analyst, with ongoing MBA in BIG DATA and competitive intelligence. Professional refresher courses in Data Science certified by IBM and Michigan University and Software Developer by The University of British Columbia.',
        links: [
            { name: "Github", url: "https://github.com/thiagohrcosta"},
            { name: "Likendin", url: "https://github.com/thiagohrcosta"},
        ]

    }

    return res.render("about", { about });
})

server.get("/courses", function (req, res) {
    return res.render("courses", { items: videos })
})

server.get("/video", function(req, res){
    const id = req.query.id;

    const video = videos.find(function(video){
        if (video.id == id){
            return true;
        }
    })

    if (!video){
        return res.send("Video not found!")
    }

    return res.render("video", { item: video })

})

server.listen(5000, function(){
    console.log("Server is running on port 5000.")
});

