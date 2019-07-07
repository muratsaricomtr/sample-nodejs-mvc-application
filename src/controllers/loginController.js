exports.getIndex = (req, res, next) => {
    let message = null;
    res.render("login", {message});
};

exports.postIndex = (req, res, next) => {

    let email = 'sample@mail.com';
    let password = 'secret';

    if (req.body.email == email && req.body.password == password)
    {
        req.session.user = true;

        res.writeHead(301, { Location: '/myalbums' });
        res.end();
    } else {
        let message = "Invalid credentials! Given email or password is wrong.";
        res.render("login", {message});
    }

};
