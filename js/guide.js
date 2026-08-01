export class AIGuide {
  constructor() {
    this.element = document.getElementById('ai-guide');
    this.textElement = this.element.querySelector('.guide-text');
    this.queue = [];
    this.isSpeaking = false;
  }

  speak(text) {
    this.queue.push(text);
    if (!this.isSpeaking) {
      this.processQueue();
    }
  }

  async processQueue() {
    while (this.queue.length > 0) {
      this.isSpeaking = true;
      const text = this.queue.shift();
      await this.displayText(text);
      await this.wait(1000);
    }
    this.isSpeaking = false;
  }

  async displayText(text) {
    this.element.classList.remove('hidden');
    this.textElement.textContent = '';
    
    for (let char of text) {
      this.textElement.textContent += char;
      await this.wait(30);
    }
  }

  wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
