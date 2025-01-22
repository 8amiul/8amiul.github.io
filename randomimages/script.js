const total_image = 62; 
const initial_position = Math.floor(Math.random() * total_image); // Getting a random number as a initial value
let current_position = initial_position;    // Setting current_position as the initial_position
const path = '/images/randomImages/';       // Path where images are stored

let description = document.querySelector(".randomimage-description");   // Getting description object which is above the image
let image_position = document.querySelector('.img-position');           // This is the image page number
let image_link = document.querySelector('#image-link');                 // This is the link or anchor tag which allows user to get the actual image by clicking the photo


// A function to load img tag, set the image source, set class to image so that css works,
// `img.onload` is responsible for loading everything after the image is properly loaded. (Mainly used here to fix the delay animation that was causing due to low internet speed)
// A function to set description from 'img-description.js' and to set current position image link address.
// finally append it to the anchor tag
function reload() {     
    const img = document.createElement('img');
    img.setAttribute('src', path + images[current_position].img);

    img.onload = function () {
        img.setAttribute('class', 'randomimage-img');

        description.innerText = images[current_position].description;                       // Getting description
        image_position.innerText = '[' + (current_position+1) + '/' + total_image + ']';    // Getting the url of current page
        image_link.setAttribute('href', path + images[current_position].img);               // Setting the href for anchor tag

       image_link.appendChild(img);                                                         // Appending the img child to anchor tag
    }

}
reload();   // Gets reloaded when a DOM is loaded

let previous = document.querySelector('.img-previous'); // query for previous button
let next = document.querySelector('.img-next');         // query for next button

function prevFunc () {
    if (current_position > 0) {
        image_link.removeChild(document.querySelector('.randomimage-img')); // at first removes the previously loaded image
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


//  Adding eventListener to those buttons. If button clicked then callbacks functions are called
next.addEventListener("click", nextFunc);
previous.addEventListener("click", prevFunc);

//  Adding eventListener to the document so that it listens for left and right arrow key input
document.addEventListener("keydown", function(event) {
    if (event.key == "ArrowLeft")
        prevFunc();
    else if (event.key == "ArrowRight")
        nextFunc();
});