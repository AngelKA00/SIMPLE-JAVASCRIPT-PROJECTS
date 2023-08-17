// create an array to display songs name
const sounds = [
    "Never mind","Run BTS", "Cypher Pt.3", "Mic Drop", "Idol"
];

// create button for the songs and to play it when user clicks
sounds.forEach((sound) => {
    const btn = document.createElement("button");
    btn.classList.add("btn");

    btn.innerText = sound;

    // to play the songs when user clicks on the button
    btn.addEventListener("click", ()=> {
        stopSongs();
        document.getElementById(sound).play();
    });

    // to display in the browser i.e in the body section of html
    document.body.appendChild(btn);
});

// stop playing songs when user clicks on other button
function stopSongs(){
    sounds.forEach((sound) => {
        const song = document.getElementById(sound);
        song.pause();// to pause the song when user clicks on other button
        //song.currentTime = 0;
    });
}
