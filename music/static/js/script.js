const totalMusic = music_src.length;                            //  Total music files in music_src array.
let currentMusicPlaying = 0;                                    //  Setting the initial index to 0
var audio = new Audio();                                        //  Creating an Audio object. Here I didn't load a audio to save data. 
                                                                //  User have to click the play button or select from list

let shuffle = false;                                            //  Default value set to false.
let repeat = false;                                             //  Default value set to false.
audio.volume = 1;                                               //  Initial value of volume. Change this if you want to change the initial volume 

const forwardSecond = 10;                                                           //  Default forward second is set to 10.
const rewindSecond = 10;

/*     A function to shuffle the array.     */
function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}
shuffleArray(music_src);                                            //  Remove this line if you don't want to get different value at every refresh of page


/*     'musicVolumeSlider': Volume slider event listener     */
let musicVolumeSlider = document.querySelector('#volume-slider')    //  query for the volume slider. Mainly needed to change it's value attribute.
musicVolumeSlider.value = audio.volume * 100;                       //  audio.volume is a fraction value ex: (0.2). To make it a integer and give it a range
                                                                    //  0-100 it is multiplied by 100
musicVolumeSlider.addEventListener("change", function () {          //  An event listener set to the volume slider so that if the value is changed by the user
                                                                    //  then the volume also should change. As the volume is a fraction of 100 then It is divided.
    audio.volume = musicVolumeSlider.value / 100;
})

/*     function: musicLoad     */
function musicLoad(musicPlayingNumber) {
    audio.pause();                                                  //  Pausing the previous music
    audio.currentTime = 0;                                          //  Setting the progress time to 0 before switching 
    musicProgressSlider.value = 0;                                  //  Setting the progress slider to 0
    audio = null;                                                   //  Removing the previously loaded file
    currentMusicPlaying = musicPlayingNumber;                       //  Setting the current playing music index number  
    fetchMusicTags();                                               //  Fetching title, artist and album from 'music_src' list
    audio = new Audio(music_src[currentMusicPlaying].link)          //  Loading new Audio object by accessing link from list
    audio.volume = musicVolumeSlider.value / 100;                   //  Setting the volume according to volume slider's position
    audio.play()                                                    //  Playing the music
}

/*     Play/Pause logic     */
let playPauseButtonIcon = document.querySelector(".play-pause-svg");    //  query for the play/pause icon
let pauseMusic = document.querySelector('#music-pause');                //  query for the play/pause button
pauseMusic.addEventListener("click", function () {                      //  Setting a event listener to toggle between pause and play
    if (audio.paused)
        if (audio.src == "")                                            //  If one choses to start the music player by clicking the play button
                                                                        //  then load the music first. audio.src is "" empty string if it's not loaded
            musicLoad(currentMusicPlaying)
        else
            audio.play();                                               //  if it's paused then play. if play then pause
    else
        audio.pause();
});

/*     The music list logic      */
let musicList = document.querySelector('.music-list');                  //  Getting the music list which is inside the container
document.addEventListener("DOMContentLoaded", function() {              //  When the page loads it will run a loop and list all the title from music_src
    for (let i = 0; i < totalMusic; i++)
    {
        let listItem = document.createElement('li');                    //  List items are create with appropriate attributes
        let listItemButton = document.createElement('button');
        listItemButton.setAttribute('type', "button");
        listItemButton.setAttribute('class', "music-list-item");

        listItemButton.innerText = music_src[i].title;                  //  Setting the title name to button text

        listItemButton.addEventListener("click", function () {          //  Setting a event listener to every button so that if triggers then set the
                                                                        //  currentMusicPlaying variable to it's index number and play it
            currentMusicPlaying = i;
            musicLoad(currentMusicPlaying)
        })

        listItem.appendChild(listItemButton)                            //  Finally appending to it's parent tags
        musicList.appendChild(listItem)
    }

})


/*      shuffle and repeat logic        */
//  if on then turn off and vice versa
//  class is set to toggle off so that if enabled then
//  the color changes to make it visually correct
let shuffleQuery = document.querySelector("#shuffle");
shuffleQuery.addEventListener("click", function() {
    shuffle = !shuffle;
    shuffleQuery.classList.toggle('off')
})
let repeatQuery = document.querySelector("#repeat");
repeatQuery.addEventListener("click", function() {
    repeat = !repeat;
    repeatQuery.classList.toggle('off')
})

/*      query for title, time, title, album     */
let timeMusic = document.querySelector('.musicTime');
let titleMusic = document.querySelector('.musicTitle');
let artistMusic = document.querySelector('.musicArtist');
let AlbumMusic = document.querySelector('.musicAlbum');

function fetchMusicTags () {
    titleMusic.innerText = music_src[currentMusicPlaying].title;
    artistMusic.innerHTML = music_src[currentMusicPlaying].artist;
    AlbumMusic.innerText = music_src[currentMusicPlaying].album;

/*
    //  'jsmediatags' was used to fetch tags and album cover.
    //  unfortunately due to CORS shit I couldn't implement album cover.
    //  This problem occurs only when files are fetched from other site.
    //  Hopefully in future there will be new alternative of this below code.

    jsmediatags.read(music_src[currentMusicPlaying].link, {
        onSuccess: function(tag) {
            var picture = tag.tags.picture;
            var base64String = "";
            for (var i = 0; i < picture.data.length; i++) {
                base64String += String.fromCharCode(picture.data[i]);
            }
            var albumCoverUri = "data:" + picture.format + ";base64," + window.btoa(base64String);

            document.getElementById('musicAlbum-cover').src = albumCoverUri;
    }});

*/
}
fetchMusicTags()

/*      next music button logic     */
let nextMusic = document.querySelector('#music-next');
function nextMusicFunc() {
    if (audio.src == "")                                                            //  if music isn't loaded then at first load it
        musicLoad(currentMusicPlaying)
    if (currentMusicPlaying < totalMusic-1)                                         //  logic to allow the button only work within range
        {
            if (shuffle)                                                            //  if shuffle is on then set a random number in range
                currentMusicPlaying = Math.floor(Math.random() * totalMusic);
            else                                                                    //  else work like as usual by incrementing it.
                currentMusicPlaying++;
            musicLoad(currentMusicPlaying)
        }
}
nextMusic.addEventListener("click", nextMusicFunc);                                 //  Setting the event listener


/*      previous music button logic         */
let previousMusic = document.querySelector('#music-previous');
previousMusic.addEventListener("click", function () {
    if (currentMusicPlaying > 0)
    {
        if (shuffle)
            currentMusicPlaying = Math.floor(Math.random() * totalMusic);
        else
            currentMusicPlaying--;
        musicLoad(currentMusicPlaying);
    }
})

/*      Music forward button logic            */
let forwardMusic = document.querySelector('#music-forward');
forwardMusic.addEventListener("click", function () {
    if (audio.currentTime + forwardSecond <= audio.duration)                        //  Only allowing the button to work within range
        audio.currentTime += forwardSecond;
})

/*      Music rewind button logic           */
let rewindMusic = document.querySelector('#music-rewind');
rewindMusic.addEventListener("click", function () {
    if (audio.currentTime - rewindSecond >= 0)
        audio.currentTime -= rewindSecond;
})

/*      List toggle logic       */
let listToggleBtn = document.querySelector(".list-toggle-btn")                      //  query for list toggle button
let listToggleBtnSvg = document.querySelector(".list-toggle-btn-svg")               //  query for list toggle button icon
musicList.style.display = "none"                                                    //  By default list is hidden.
listToggleBtn.addEventListener("click", function () {                               //  Setting and listener to toggle hide and show list also changing the icon
    if (musicList.style.display == "none") {
        musicList.style.display = "block"
        listToggleBtnSvg.src = "static/svg/chevron-up.svg"
    }
    else {
        musicList.style.display = "none"
        listToggleBtnSvg.src = "static/svg/chevron-down.svg"
    }
})

/*      Music progress bar logic        */
let musicProgressSlider = document.querySelector('#progress-slider')
musicProgressSlider.value = 0;                                                      //  It should be at position 0
musicProgressSlider.addEventListener("change", function() {
    audio.currentTime = (musicProgressSlider.value * audio.duration) / 100;         //  A listener to change audio current time when slider position is changed
})

let musicVolumeHTML = document.querySelector('.musicVolume');
/*      A recursive function running in every 100ms     */
//  Using this for printing time, volume, toggling play/pause icon and checking wether music is ended or not
function loop_100ms() {
    if (audio.paused)
        playPauseButtonIcon.src = "static/svg/play.svg";
    else 
        playPauseButtonIcon.src = "static/svg/pause.svg";

    /*      auto next music after previous one is ended logic       */
    //  This condition checks and keep loading next music after one is ended till it's the end of the list
    if (currentMusicPlaying != totalMusic-1)
    {
        if (audio.ended) {
            if (repeat)                                                         // if repeat is set then keep playing the same music 
                musicLoad(currentMusicPlaying)
            else
                nextMusicFunc();
        }
    }

    /*  this line keeps printing the volume     */
    musicVolumeHTML.innerText = `Vol: ${Math.trunc(audio.volume * 100)}%`;

    /*  logic of printing current time and duration in min:sec and hr:min:sec format   */
    if (audio.src != "") {

        let totalSecondsDuration = Math.trunc(audio.duration);
        let hoursDur = Math.floor(totalSecondsDuration / 3600);
        let minutesDur = Math.floor((totalSecondsDuration % 3600) / 60);
        let secondsDur = totalSecondsDuration % 60;

        let totalSeconds = Math.trunc(audio.currentTime);
        let hours = Math.floor(totalSeconds / 3600);
        let minutes = Math.floor((totalSeconds % 3600) / 60);
        let seconds = totalSeconds % 60;

        /*  this condition is given cause when the audio.duration = NaN it gets printed    */
        //  on site which doesn't look good. So now time is only showed when duration is fetched fully
        if (!isNaN(audio.duration)) {
            if (totalSecondsDuration >= 3600)
                timeMusic.innerText = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')} / ${hours.toString().padStart(2, '0')}:${minutesDur.toString().padStart(2, '0')}:${secondsDur.toString().padStart(2, '0')}`;
            else
                timeMusic.innerText = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')} / ${minutesDur.toString().padStart(2, '0')}:${secondsDur.toString().padStart(2, '0')}`;
        }
    }
        //  Calling itself after 100ms
        setTimeout(loop_100ms, 100);
}

/*  This function is for operating task after every second  */
//  Good for changing the progress slider position 
function loop_1000ms() {
    /*  this condition is given cause when the audio.duration = NaN the slider gets a '50' value    */
    //  giving this condition the slider doesn't glitch
    if (!isNaN(audio.duration))
        musicProgressSlider.value = (audio.currentTime / audio.duration) * 100;
    setTimeout(loop_1000ms, 1000)
}

loop_100ms();
loop_1000ms();