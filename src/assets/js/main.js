let container = document.querySelector("ul#albums");
container.querySelectorAll('li').forEach(function(click){
    click.addEventListener("click",function() {
        axios.get('https://jsonplaceholder.typicode.com/albums/'+this.id+'/photos')
            .then(response => {

                let results = response.data;
                let counter = 0;

                let images = [];
                for (let i=0; i<results.length; i++)
                {
                    if (results[i].albumId == this.id)
                    {
                        images.push(results[i]);
                        if (++counter == 8)
                            break;
                    }
                }

                let albumsContainer = document.getElementsByClassName('album-container')[0];

                albumsContainer.innerHTML = '';

                for (let i in images)
                {
                    console.log();

                    var img = document.createElement("img");
                    img.src = images[i].thumbnailUrl;
                    img.alt = "Album Image";
                    img.setAttribute('data-url', images[i].url);

                    albumsContainer.appendChild(img);
                }


            })
            .catch(function (error) {
                console.log(error);
            });
    })
});