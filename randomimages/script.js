const total_image = 62;
const initial_position = Math.floor(Math.random() * total_image);
let current_position = initial_position;

let img = document.querySelector(".randomimage-img");
let description = document.querySelector(".randomimage-description");
let image_position = document.querySelector('.img-position');
let image_link = document.querySelector('#image-link');

img.setAttribute('src', '/images/randomImages/' + images[current_position].img);
description.innerText = images[current_position].description;
image_position.innerText = '[' + (current_position+1) + '/' + total_image + ']';
image_link.setAttribute('href', '/images/randomImages/' + images[current_position].img)


let previous = document.querySelector('.img-previous');
let next = document.querySelector('.img-next');

function prevFunc () {
    if (current_position > 0) {
        current_position--;
        img.setAttribute('src', '/images/randomImages/' + current_position + '.jpg');
        description.innerText = images[current_position].description;
        image_position.innerText = '[' + (current_position+1) + '/' + total_image + ']';
        image_link.setAttribute('href', '/images/randomImages/' + images[current_position].img)
    }
};
function nextFunc() {
    if (current_position < total_image-1) {
        current_position++;
        img.setAttribute('src', '/images/randomImages/' + current_position + '.jpg');
        description.innerText = images[current_position].description;
        image_position.innerText = '[' + (current_position+1) + '/' + total_image + ']';
        image_link.setAttribute('href', '/images/randomImages/' + images[current_position].img)
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