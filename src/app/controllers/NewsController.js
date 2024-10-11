class NewsController {

    
     //[GET]/news/;slug
    show(req,res){
        res.send("new detail")
    }

    //[GET]/news
    index(req,res){
        res.render('news')
    }
}

module.exports = new NewsController