let speech = new SpeechSynthesisUtterance();

let voices = [];

let voiceSelect = document.querySelector("select");
window.speechSynthesis.onvoiceschanged = () =>{
    voices = window.speechSynthesis.getVoices();  // this will add all the voices in the device
    speech.voice = voices[0];

    // for display voices list
    voices.forEach((voice,i)=>{
        voiceSelect.options[i] = new Option(voice.name,i);
    });
}

// change voice on select from dropdown
voiceSelect.addEventListener("change",()=>{
    speech.voice = voices[voiceSelect.value];
})

document.querySelector("button").addEventListener("click",()=>{
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
})