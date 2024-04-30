const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioContext = new AudioContext();

const createOscillator = (frequency) => {
    const oscillator = audioContext.createOscillator();
    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);
    oscillator.connect(audioContext.destination);
    return oscillator;
};

const playNote = (frequency) => {
    const oscillator = createOscillator(frequency);
    oscillator.start();
    oscillator.stop(audioContext.currentTime + 0.5);
};

const notes = {
    'C': 261.63,
    'C#': 277.18,
    'D': 293.66,
    'D#': 311.13,
    'E': 329.63,
    'F': 349.23,
    'F#': 369.99,
    'G': 392.00,
    'G#': 415.30,
    'A': 440.00,
    'A#': 466.16,
    'B': 493.88
};

document.querySelectorAll('.white-key, .black-key').forEach(key => {
    key.addEventListener('mousedown', () => {
        const note = key.dataset.note;
        if (notes[note]) {
            playNote(notes[note]);
        }
    });
});