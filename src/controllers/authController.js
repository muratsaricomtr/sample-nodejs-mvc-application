// Serve login page
exports.getIndex = (req, res, next) => {
    let message = null;
    res.render("login", {message});
};

// If user submitted data, run the code in below
exports.postIndex = (req, res, next) => {

    // Pre-defined user credentials
    let email = 'sample@mail.com';
    let password = 'secret';

    /*
        Checks user credentials, if given info valid defines a session and redirects user to albums page,
        if not valid, serves login page again with a flash message.
     */
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

// Logout Process
exports.getLogout = (req, res, next) => {
    req.session.destroy();

    res.writeHead(301, { Location: '/login' });
    res.end();
};