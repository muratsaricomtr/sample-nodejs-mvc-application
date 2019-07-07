const axios = require('axios');

exports.getImages = (req, res, next) => {

    // If user session doesn't exists, serve empty array
    if (!req.session.user)
    {
        return res.send([]);
    } else {

        // Define album id from query parameters
        const id = req.params.id;

        axios.get('https://jsonplaceholder.typicode.com/albums/'+id+'/photos')
            .then(response => {

                let results = response.data;
                let counter = 0;

                // Sample JSON returns all images, get only album's (specified by ID) images,
                let images = [];
                for (let i=0; i<results.length; i++)
                {
                    if (results[i].albumId == id)
                    {
                        images.push(results[i]);
                        if (++counter == 8)
                            break;
                    }
                }

                // Response JSON data
                return res.send(images);


            })
            .catch(function (error) {
                console.log(error);
            });


    }

};