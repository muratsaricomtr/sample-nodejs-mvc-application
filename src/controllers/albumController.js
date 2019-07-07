const axios = require('axios');

exports.getIndex = (req, res, next) => {

    // If user session doesn't exists, redirect page to login.
    if (!req.session.user)
    {
        res.writeHead(301, { Location: '/login' });
        res.end();
    } else {

        // Fetch albums data
        axios.get('https://jsonplaceholder.typicode.com/albums')
            .then(function (response) {

                // Get first 10 albums
                const albums = response.data.slice(0, 10);

                // Send data to view layer
                res.render("albums", {albums});
            })
            .catch(function (error) {
                console.log(error);
            });
    }

};