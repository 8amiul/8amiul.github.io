/*
const total_image = images.length; 
const initial_position = Math.floor(Math.random() * total_image); // Getting a random number as a initial value
let current_position = 0;    // Setting current_position as the initial_position
const path = '/images/randomImages/';       // Path where images are stored
const cache_difference = 10;

let description = document.querySelector(".randomimage-description");   // Getting description object which is above the image
let image_position = document.querySelector('.img-number');           // This is the image page number
let image_link = document.querySelector('#image-link');                 // This is the link or anchor tag which allows user to get the actual image by clicking the photo
let loader = document.querySelector('#loader');

window.onload = function () {       // Caching first 'cache_difference = 10' images at once for speeding up image viewing experience.
    for (let i = 0; i < cache_difference; i++)
    {
        const cache_img = new Image();
        cache_img.src = path + images[i].img;
    }
}

// A function to load img tag, set the image source, set class to image so that css works,
// `img.onload` is responsible for loading everything after the image is properly loaded. (Mainly used here to fix the delay animation that was causing due to low internet speed)
// A function to set description from 'img-description.js' and to set current position image link address.
// finally append it to the anchor tag
function reload() {     
    const img = document.createElement('img');
    img.setAttribute('src', path + images[current_position].img);
    image_position.innerText = '[' + (current_position+1) + '/' + total_image + ']';    // Getting the url of current page

    img.onload = function () {
        loader.style.display = 'none';                                                      // by default the loading circle should be set to none
                                                                                            // and every reload call will set it loader display to none cause the call back function makes it visible
        img.setAttribute('class', 'randomimage-img');

        description.innerText = images[current_position].description;                       // Getting description
        description.style.display = 'block';                                                // Setting description visible only when the image is loaded 

        image_link.setAttribute('href', path + images[current_position].img);               // Setting the href for anchor tag

        image_link.appendChild(img);                                                         // Appending the img child to anchor tag
    }

}
reload();   // Gets reloaded when a DOM is loaded


let previous = document.querySelector('.img-previous'); // query for previous button
let next = document.querySelector('.img-next');         // query for next button

function prevFunc () {
    if (current_position > 0) {
        loader.style.display = 'block';                                     // setting it to block can be said visible because a loading circle should load when it's loading lol
        image_link.removeChild(document.querySelector('.randomimage-img')); // at first removes the previously loaded image
        description.style.display = 'none';                                 // Setting it to none so that it only visible when the new image is loaded
        current_position--;
        reload();
    }
};
function nextFunc() {
    if (current_position < total_image-1) {
        loader.style.display = 'block';
        image_link.removeChild(document.querySelector('.randomimage-img'));
        description.style.display = 'none'; 
        
        // below code will load the 'current_position + 10' index image at every next click
        if (current_position + cache_difference < total_image)
        {
            const cache_img = new Image();
            cache_img.src = path + images[current_position + cache_difference].img;
        }

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


let jumpto = document.getElementById('jump-to');
//jumpto.setAttribute('placeholder', ('[' + current_position+1 + "/" + total_image + ']'));

jumpto.addEventListener('change', function () {
    if (jumpto.value <= total_image && jumpto.value > 0) {
        loader.style.display = 'block';
        image_link.removeChild(document.querySelector('.randomimage-img'));
        description.style.display = 'none'; 
        current_position = jumpto.value-1;
        reload();
    }
});


*/
// For scrolling list of posts

const total_image = images.length;
let posts_per_page = 10;
let current_page = 1;
let total_page = Math.ceil(total_image / posts_per_page);
const path = "randomImages/";

const web_content = document.querySelector("#content");

let starting_position = total_image;
let ending_position = starting_position-10;


let container = document.createElement('div');

let start = 1;
let end;
if (total_page < 10)
    end = total_page
else
    end = 10

function loadContent () {
    for (let i = starting_position-1; i >= ending_position; i--)
    {
        if (container == null)
            container = document.createElement('div');

        container.setAttribute('class', "image-post-container");
        const image_post_info = document.createElement('div');
        image_post_info.setAttribute('class', "image-post-info");
        const image_post_author = document.createElement('div');
        image_post_author.setAttribute('class', "image-post-author");
        const image_post_date = document.createElement('div');
        image_post_date.setAttribute('class', "image-post-date");
        const image_post_caption = document.createElement('div');
        image_post_caption.setAttribute('class', "image-post-caption");
        const image_post_img = document.createElement('img');

        if (images[i].date)
            image_post_date.innerText = "[" + images[i].date + "]";
        image_post_caption.innerText = images[i].description;
        image_post_img.setAttribute('src', path + images[i].img);


        image_post_info.appendChild(image_post_author);
        image_post_info.appendChild(image_post_date); 
        image_post_info.appendChild(image_post_caption);

        container.appendChild(image_post_info);
        container.appendChild(image_post_img);
        web_content.appendChild(container);
    }

    /* ---------------------------------------------------------------------------------- */
    let image_nav_container = document.createElement("div");
    image_nav_container.classList.add("image-buttons");

    let img_prev = document.createElement("a");
    img_prev.innerText = "<";
    img_prev.style.fontSize = "2rem"
    img_prev.style.textDecoration = "none"
    if (current_page == 1)
        img_prev.setAttribute("href", "javascript:void(0);");
    else
        img_prev.setAttribute("href", "#");
    img_prev.setAttribute("title", "You can use left and right arrow keys to navigate through images");
    img_prev.classList.add("image-btn", "img-previous");

    let img_next = document.createElement("a");
    img_next.innerText = ">";
    img_next.style.fontSize = "2rem"
    img_next.style.textDecoration = "none"
    if (current_page == total_page)
        img_next.setAttribute("href", "javascript:void(0);");
    else
        img_next.setAttribute("href", "#");
    img_next.setAttribute("title", "You can use left and right arrow keys to navigate through images");
    img_next.classList.add("image-btn", "img-next");

    function img_next_func() {
        if (ending_position > 0) {
            if (ending_position-10 > 0) {
                starting_position -= 10;
                ending_position -= 10;
            }
            else {
                starting_position -= 10;
                ending_position = 0;
            }

            container.remove()
            container = null;
            image_nav_container.remove()
            current_page++;
            loadContent();
        }
    }
    function img_prev_func() {
        if (starting_position != total_image) {
            starting_position += 10;
            ending_position += 10;
            container.remove();
            container = null;
            image_nav_container.remove();
            current_page--;
            loadContent();
        }
    }

    img_prev.addEventListener("click", img_prev_func);
    img_next.addEventListener("click", img_next_func);
    


    image_nav_container.appendChild(img_prev);
    /* ---------------------------------------------------------------------------------- */



    // logic for page numbers
    /* --------------------------------------------------------------- */
    function page_numbers (n) {
        let page = document.createElement("a");
        page.addEventListener("click", function () {
            starting_position = total_image - ((n - 1) * posts_per_page);
            ending_position = (total_image - posts_per_page) - ((n - 1) * posts_per_page)
            if (ending_position < 0) ending_position = 0;

            container.remove();
            container = null;
            image_nav_container.remove();
            current_page = n;
            loadContent();
        });
        page.innerText = n;
        if (n == current_page) {
            page.style.fontSize = "2rem";
        }

        page.setAttribute("href", "#");
        page.classList.add("page-num-btn", "image-btn");
        page.style.textDecoration = "none";
        image_nav_container.appendChild(page);
    }
    if (current_page > 6 && total_page >= 10) {
        if (current_page + 4 < end) {
            for (let i = current_page - 5; i <= current_page + 4; i++) {
                page_numbers(i);
            }
        } else {
            for (let i = end - 4 - 5; i <= end; i++) {
                page_numbers(i);
            }
        }
    } else {
        for (let i = start; i <= end; i++) {
            page_numbers(i);
        }
    }
    /* -------------------------------------------------------------- */
    image_nav_container.appendChild(img_next);
    web_content.appendChild(image_nav_container);
}
loadContent();

document.addEventListener("keydown", function(event) {
    if (event.key == "ArrowLeft")
        document.querySelector(".img-previous").click();
    else if (event.key == "ArrowRight")
        document.querySelector(".img-next").click();
});