//variables to perform the operation
let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlIcon");
//while the song loaded
song.onloadedmetadata - function(){
    progress.max = song.duration; //to check when it reaches end of song
    progress.value = song.currentTime;//to check where user paused the song
}
// to perform when user clicks on play icon
function playPause(){
    if(ctrlIcon.classList.contains("fa-pause")){ //if song is not playing ,
        song.pause(); //play icon must not be visible
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");
    }
    else{ //if song is playing , pause icon must be visible
        song.play();
        ctrlIcon.classList.remove("fa-play");
        ctrlIcon.classList.add("fa-pause");
    }
}
// progress bar movement function for every 500 sec
if(song.play()){
    setInterval(()=>{
        progress.value = song.currentTime; // it moves to current time of song
    },500);

}
// to move progress bar by user
progress.onchange = function(){
    song.play();
    song.currentTime = progress.value;// song progress will be updated to current time
    // icon also needs to be moved with the song
    ctrlIcon.classList.remove("fa-play");
    ctrlIcon.classList.add("fa-pause");
}