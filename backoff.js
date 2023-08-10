const ExponentialBackoff = {
    init(minDelay, maxDelay, jitter) {
      this.minDelay = minDelay;
      this.maxDelay = maxDelay;
      this.jitter = jitter;
      this.currentDelay = minDelay;
    },
    backoff() {
      const delay = this.currentDelay + Math.random() * this.jitter;
      this.currentDelay = Math.min(this.maxDelay, this.currentDelay * 2);
      console.log(this.currentDelay)
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve();
        }, delay);
      });
    },
  };
  
  const backoff = Object.create(ExponentialBackoff); // Use Object.create to create an instance
  
  backoff.init(100, 1000, Math.random(0,1)*100); // Initialize the instance
  
  backoff.backoff().then(() => {
    console.log("Request succeeded!");
  });
  
  console.log(backoff.backoff());
  