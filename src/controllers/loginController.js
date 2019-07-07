exports.getIndex = (req, res, next) => {
    res.render("login");
};

exports.postIndex = (req, res, next) => {

    console.log(req.body.email);
    res.writeHead(301, { Location: '/login' });
    res.end();
};
