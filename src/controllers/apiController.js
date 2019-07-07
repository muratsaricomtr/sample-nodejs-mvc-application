const axios = require('axios');

exports.getImages = (req, res, next) => {

    if (!req.session.user)
    {
        return res.send([]);
    } else {
        const id = req.params.id;

        axios.get('https://jsonplaceholder.typicode.com/albums/'+id+'/photos')
            .then(response => {

                let results = response.data;
                let counter = 0;

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

                return res.send(images);


            })
            .catch(function (error) {
                console.log(error);
            });


    }

};