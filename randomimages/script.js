const total_image = 62;
const initial_position = Math.floor(Math.random() * total_image);
let current_position = initial_position;
const path = '/images/randomImages/';

let description = document.querySelector(".randomimage-description");
let image_position = document.querySelector('.img-position');
let image_link = document.querySelector('#image-link');

function reload() {
    const img = document.createElement('img');
    img.setAttribute('src', path + images[current_position].img);

    img.onload = function () {
        img.setAttribute('class', 'randomimage-img');

        description.innerText = images[current_position].description;
        image_position.innerText = '[' + (current_position+1) + '/' + total_image + ']';
        image_link.setAttribute('href', path + images[current_position].img);

       image_link.appendChild(img);
    }

}
reload();

let previous = document.querySelector('.img-previous');
let next = document.querySelector('.img-next');

function prevFunc () {
    if (current_position > 0) {
        image_link.removeChild(document.querySelector('.randomimage-img'));
        current_position--;
        reload();
    }
};
function nextFunc() {
    if (current_position < total_image-1) {
        image_link.removeChild(document.querySelector('.randomimage-img'));
        current_position++;
        reload();
    }
};

next.addEventListener("click", nextFunc);
previous.addEventListener("click", prevFunc);
document.addEventListener("keydown", function(event) {
    if (event.key == "ArrowLeft")
        prevFunc();
    else if (event.key == "ArrowRight")
        nextFunc();
});