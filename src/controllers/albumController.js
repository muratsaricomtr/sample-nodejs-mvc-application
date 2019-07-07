const axios = require('axios');

exports.getIndex = (req, res, next) => {
    if (!req.session.user)
    {
        res.writeHead(301, { Location: '/login' });
        res.end();
    } else {
        axios.get('https://jsonplaceholder.typicode.com/albums')
            .then(function (response) {

                const albums = response.data.slice(0, 10);

                res.render("albums", {albums});
            })
            .catch(function (error) {
                console.log(error);
            });
    }

};