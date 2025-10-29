// AudioPlayer - Web-based audio player with playlist support
class AudioPlayer {
    constructor() {
        this.playlist = [];
        this.currentIndex = 0;
        this.audio = new Audio();
        this.isPlaying = false;
    }
    
    addTrack(url, title) {
        this.playlist.push({ url, title });
    }
    
    play(index = null) {
        if (index !== null) {
            this.currentIndex = index;
        }
        
        if (this.playlist.length === 0) return;
        
        const track = this.playlist[this.currentIndex];
        this.audio.src = track.url;
        this.audio.play();
        this.isPlaying = true;
    }
    
    pause() {
        this.audio.pause();
        this.isPlaying = false;
    }
    
    next() {
        this.currentIndex = (this.currentIndex + 1) % this.playlist.length;
        this.play();
    }
    
    previous() {
        this.currentIndex = (this.currentIndex - 1 + this.playlist.length) % this.playlist.length;
        this.play();
    }
}

module.exports = AudioPlayer;
