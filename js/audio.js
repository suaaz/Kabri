/**
 * Web Audio API Sound Synthesizer
 * Provides instant, zero-dependency sound effects for games, clues, and micro-interactions.
 * Does not rely on external MP3s, ensuring 100% offline and GitHub Pages reliability.
 */

class SoundController {
  constructor() {
    this.ctx = null;
    this.isMuted = localStorage.getItem('fauna_muted') === 'true';
    this.initAudioContext();
  }

  initAudioContext() {
    if (!this.ctx && (window.AudioContext || window.webkitAudioContext)) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();
    }
  }

  resumeContext() {
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  toggleMute() {
    this.isMuted = !this.isMuted;
    localStorage.setItem('fauna_muted', this.isMuted);
    return this.isMuted;
  }

  playPop() {
    if (this.isMuted) return;
    this.resumeContext();
    if (!this.ctx) return;

    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const now = this.ctx.currentTime;

      osc.type = 'sine';
      osc.frequency.setValueAtTime(450, now);
      osc.frequency.exponentialRampToValueAtTime(800, now + 0.08);

      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.08);
    } catch (e) {
      console.warn('Audio play error:', e);
    }
  }

  playClueReveal() {
    if (this.isMuted) return;
    this.resumeContext();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime;
      const notes = [523.25, 659.25, 783.99]; // C5, E5, G5

      notes.forEach((freq, i) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        const start = now + i * 0.06;

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, start);

        gain.gain.setValueAtTime(0.1, start);
        gain.gain.exponentialRampToValueAtTime(0.001, start + 0.18);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(start);
        osc.stop(start + 0.18);
      });
    } catch (e) {
      console.warn(e);
    }
  }

  playCorrect() {
    if (this.isMuted) return;
    this.resumeContext();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime;
      // Bright triumphant arpeggio: C5, E5, G5, C6
      const freqs = [523.25, 659.25, 783.99, 1046.5];

      freqs.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        const startTime = now + idx * 0.08;

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, startTime);

        gain.gain.setValueAtTime(0.15, startTime);
        gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.35);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(startTime);
        osc.stop(startTime + 0.35);
      });
    } catch (e) {
      console.warn(e);
    }
  }

  playWrong() {
    if (this.isMuted) return;
    this.resumeContext();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(180, now);
      osc.frequency.linearRampToValueAtTime(110, now + 0.28);

      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.28);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.28);
    } catch (e) {
      console.warn(e);
    }
  }

  playBirdChirp() {
    if (this.isMuted) return;
    this.resumeContext();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(2200, now);
      osc.frequency.exponentialRampToValueAtTime(3200, now + 0.06);
      osc.frequency.exponentialRampToValueAtTime(1900, now + 0.12);

      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.14);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.14);
    } catch (e) {
      console.warn(e);
    }
  }

  playDolphinSonar() {
    if (this.isMuted) return;
    this.resumeContext();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime;
      [0, 0.04, 0.08, 0.12, 0.15].forEach(t => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        const clickTime = now + t;

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(1600 + Math.random() * 800, clickTime);

        gain.gain.setValueAtTime(0.08, clickTime);
        gain.gain.exponentialRampToValueAtTime(0.001, clickTime + 0.025);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(clickTime);
        osc.stop(clickTime + 0.025);
      });
    } catch (e) {
      console.warn(e);
    }
  }

  playFanfare() {
    if (this.isMuted) return;
    this.resumeContext();
    if (!this.ctx) return;

    try {
      const notes = [
        { f: 523.25, d: 0.1 },  // C5
        { f: 659.25, d: 0.1 },  // E5
        { f: 783.99, d: 0.1 },  // G5
        { f: 1046.5, d: 0.3 }   // C6
      ];
      let t = this.ctx.currentTime;
      notes.forEach(n => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(n.f, t);
        gain.gain.setValueAtTime(0.15, t);
        gain.gain.exponentialRampToValueAtTime(0.001, t + n.d);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(t);
        osc.stop(t + n.d);
        t += n.d + 0.02;
      });
    } catch (e) {
      console.warn(e);
    }
  }
}

// Global singleton instance
window.soundCtrl = new SoundController();
