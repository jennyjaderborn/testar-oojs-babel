/** Aids with playing sounds */
class SoundManager {
    
    static play(src) {
        var audio = document.querySelector("audio");
        audio.src = src;
        audio.play();
    }
}