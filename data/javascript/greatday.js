const CONSUMER_KEY = 'fill me in before release';

function writeTime () {
    var locator = document.getElementById('time');
    var date = new Date();

    locator.textContent = date.toTimeString().split(' ')[0];
}
writeTime();
setInterval(writeTime, 1000);

function load500px () {
    if (CONSUMER_KEY !== 'fill me in before release') {
        var request = new XMLHttpRequest();
        request.onload = function () {
            var data = JSON.parse(request.response);
            var images = document.querySelectorAll('img');
            var len = data.photos.length;
            var container = document.querySelector('.imgContainer');
            for (var i=0; i < len; i++){
                if (images.length !== 0) {
                    images[i].setAttribute('src', data.photos[i].image_url);
                } else {
                    var link = document.createElement('a');
                    link.href = "https://www.500px.com" + data.photos[i].url;
                    var image = document.createElement('img');
                    image.setAttribute('src', data.photos[i].image_url);
                    link.appendChild(image);
                    container.appendChild(link);
                }
            }

            var hidden = document.querySelector('.hidden');
            if (hidden) {
                hidden.classList.remove("hidden");
            }

            var body = document.querySelector('.basebody');
            if (body) {
                body.classList.remove('basebody');
            }
        };
        request.open("get", "https://api.500px.com/v1/photos?feature=popular&license_type=3&consumer_key=" + CONSUMER_KEY, true);
        request.send();
    }
}

setInterval(load500px,  1000 * 60 * 5);