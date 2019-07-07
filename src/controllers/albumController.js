const axios = require('axios');

exports.getIndex = (req, res, next) => {
    axios.get('https://jsonplaceholder.typicode.com/albums')
    .then(function (response) {

        const albums = response.data.slice(0, 10);

        res.render("albums", {albums});
    })
    .catch(function (error) {
        console.log(error);
    });
};