document.addEventListener('DOMContentLoaded', init);

function init() {
  const synth = window.speechSynthesis;
  const voiceSelect = document.getElementById('voice-select');
  const textInput = document.getElementById('text-to-speak');
  const collection = document.querySelectorAll('button');
  const talkButton = collection[0];
  const faceImage = document.querySelectorAll('img')[0];

  function populateVoiceList() {
    const voices = synth.getVoices();
    voiceSelect.innerHTML = '';
    voices.forEach((voice) => {
      const option = document.createElement('option');
      option.textContent = `${voice.name} (${voice.lang})`;
      option.setAttribute('data-name', voice.name);
      option.setAttribute('data-lang', voice.lang);
      voiceSelect.appendChild(option);
    });
  }

  populateVoiceList();
  if (synth.onvoiceschanged !== undefined) {
    synth.onvoiceschanged = populateVoiceList;
  }

  talkButton.addEventListener('click', () => {
    const utterance = new SpeechSynthesisUtterance(textInput.value);
    const selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');
    const voices = synth.getVoices();
    utterance.voice = voices.find((voice) => voice.name === selectedOption);

    faceImage.src = 'assets/images/smiling-open.png';
    synth.speak(utterance);

    utterance.onend = () => {
      faceImage.src = 'assets/images/smiling.png';
    };
  });
}