class NewsController {
    //[GET] /search
    index(req, res) {
        res.render('news');
    }

    show(req, res) {
        res.send('New Deitail!');
    }
}

module.exports = new NewsController();
