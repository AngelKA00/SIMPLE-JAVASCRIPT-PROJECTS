// declare all variables 
let previous = document.querySelector('#pre');
let play = document.querySelector('#play');
let next = document.querySelector('#next');
let title = document.querySelector('#title');
let artist = document.querySelector('#artist');
let track_image = document.querySelector('#track_image');
let slider = document.querySelector('#duration_slider');

let timer;
let autoplay = 1;
// create an array
let index_no = 0;
let playing_song = false; // song will not play until user clicks, so is is false
let track = document.createElement('audio');

let All_song = [
    {
        name : "Dynamite",
        path : "dynamite.mp3",
        img : "cover.jpg",
        artist : "BTS"
    },
    {
        name : "Money",
        path : "money.mp3",
        img : "cover2.jpg",
        artist : "Lisa"
    },
    {
        name : "Who Says",
        path : "who says.mp3",
        img : "cover3.jpg",
        artist : "Selena Gomez"
    }  
];
// to make the song load
function load_track(index_no){
    clearInterval(timer);
    reset_slider();
    // get all info from array
    track.src = All_song[index_no].path;
    title.innerHTML = All_song[index_no].name;
    track_image.src = All_song[index_no].img;
    artist.innerHTML = All_song[index_no].artist;
    // default slider for playing songs is set till 1000 range
    timer = setInterval(range_slider,1000); 

}

load_track(index_no); // load track function gets called
// when user clicks on play button
function just_play(){
    if(playing_song == false){
        playsong();
    }
    else{
        pausesong();
    }

}
// default slider gets changed to 0
function reset_slider(){
    slider.value = 0;    
}
// when user clicks play button it changes to pause button
function playsong(){
    track.play()
    playing_song= true;
    play.innerHTML = `<i class="fa-solid fa-pause"></i>`
}
// when user clicks pause button it changes to play button
function pausesong(){
    track.pause()
    playing_song= false;
    play.innerHTML = `<i class="fa-solid fa-play"></i>`
}
// when user clicks next arrow button, it checks if the current song indexno is less than
// total songs present or not,if yes, it moves to next song
function next_song(){
    if(index_no<All_song.length - 1){
        index_no += 1;
        load_track(index_no);
        playsong();
    }
    else{
        index_no=0;
        load_track(index_no);
        playsong();
    }
}
// when user clicks previous button, it checks if current indexno is greater than 0 or not,
//  if yes, it moves back to that song
function previous_song(){
    if(index_no > 0 ){
        index_no -= 1;
        load_track(index_no);
        playsong();
    }
    else{
        index_no = All_song;
        load_track(index_no);
        playsong();
    }
}
// when user scrolls the default slider bar, it needs to go to that specific location
// and play that line of song 
function change_duration(){
    slider_position = track.duration *(slider.value / 100);
    track.currentTime = slider_position; 
}