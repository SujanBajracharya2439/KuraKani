module.exports =function(){
    return{
        SetRouting: function(router){
            router.get('/latest-football-news',this.footballNews);
        },
        footballNews: function (req, res) {
            res.render('news/footballnews',{title:'KuraKani- Latest News', user:req.user});
        }
    }   
}