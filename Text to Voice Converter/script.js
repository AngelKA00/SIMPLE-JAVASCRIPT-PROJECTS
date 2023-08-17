// add speech function

let speech = new SpeechSynthesisUtterance();

let voices = [];// to add all available voices

let voiceSelect = document.querySelector("select"); // user can select any voices

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices(); // it gets all voices available on the device
    speech.voice = voices[0];// it starts from 1st voice given as a default

    // user can select any voice from drop down and the name is also visible once clicked
    voices.forEach((voice, i) => (voiceSelect.options[i] = new Option(voice.name, i)));
};
// if user changes the voice it should be stored 
voiceSelect.addEventListener("change",() => {
    speech.voice = voices[voiceSelect.value];
});
// once user typed something in textarea and clicks on button,
// it should analyze the text and speak using built in js speech function
document.querySelector("button").addEventListener("click", () => {
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);// to speak what is given in window
});
