// declare variables
const kits = ["crash", "kick", "snare", "tom"];
const container = document.querySelector(".container");

// creating buttons
kits.forEach((kit)=>{
    const btn = document.createElement("button");
    btn.classList.add("btn"); // adding btn class
    btn.innerText = kit; // adding kits name
    btn.style.backgroundImage = "url(images/" + kit + ".png)"; // adding kits images
    container.appendChild(btn); // adding that btn to the container
    const audio = document.createElement("audio"); // creating audio
    audio.src = "sounds/" + kit + ".mp3"; // for respective kit
    container.appendChild(audio);// adding audio 

    // to play audio when user clicks
    btn.addEventListener("click", ()=>{
        audio.play();
    });

    // to play audio when user clicks on keyboard buttons respectively
    window.addEventListener("keydown", (e)=>{
        if(e.key === kit.slice(0,1)){ // 0,1 since we gave kits name in array
            audio.play();
            btn.style.transform = "scale(0.8)"; // to make it zoom effect
            // to remove the zoom effect within 100 ms
            setTimeout(()=>{
                btn.style.transform = "scale(1)";
            }, 100)
        }
    });
});