let albumContainer = document.querySelector("ul#albums");
if (albumContainer != null) {
    albumContainer.querySelectorAll('li').forEach(function(click){
        click.addEventListener("click",function() {
            axios.get('/api/images/'+this.id)
                .then(response => {

                    let images = response.data;

                    let albumsContainer = document.getElementsByClassName('album-container')[0];
                    albumsContainer.innerHTML = '';

                    for (let i in images)
                    {
                        console.log();

                        let img = document.createElement("img");
                        img.src = images[i].thumbnailUrl;
                        img.alt = "Album Image";
                        img.setAttribute('data-url', images[i].url);

                        let div = document.createElement("div");
                        div.appendChild(img);

                        albumsContainer.appendChild(div);

                    }

                    listenThumbnailClickEvents();


                })
                .catch(function (error) {
                    console.log(error);
                });
        })
    });
}


function listenThumbnailClickEvents() {
    document.querySelectorAll(".album-container img").forEach(function(click){
        click.addEventListener("click",function(e) {
            console.log();


            let imageContainer = document.getElementsByClassName('full-image-container')[0];
            imageContainer.innerHTML = '';

            let img = document.createElement("img");
            img.src = e.target.dataset.url;
            img.alt = "Full Size Image";

            imageContainer.appendChild(img);
        })
    });
}



function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


let form = document.querySelector('form#login');

if (form != null)
{
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        let passFlag = true;

        if (!validateEmail(e.target[0].value))
        {
            let group = document.querySelector('.form-group');
            group.className += ' error';
            passFlag = false;
        } else {
            let group = document.querySelector('.form-group');
            group.className = 'form-group';
        }

        if (e.target[1].value.length == 0)
        {
            let group = document.querySelectorAll('.form-group')[1];
            group.className += ' error';
            passFlag = false;
        } else {
            let group = document.querySelectorAll('.form-group')[1];
            group.className = 'form-group';
        }

        if (passFlag)
        {
            form.submit();
        }

    }, false);
}