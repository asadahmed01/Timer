class Timer
{
  constructor(durationInput, startButton, pauseButton, callbacks)
  {
    this.durationInput = durationInput;
    this.startButton = startButton;
    this.pauseButton = pauseButton;
    if(callbacks)
    {
      this.onStart = callbacks.onStart;
      this.onTick = callbacks.onTick;
      this.onComplete = callbacks.onComplete;
    }
    //attache eventlisteners to the buttons
    this.startButton.addEventListener('click', this.startTimer);
    this.pauseButton.addEventListener('click', this.pauseTimer);
  }
  startTimer = () =>
  {
    if(this.onStart){this.onStart(this.timeRemaining);}
    this.tick();
    this.returnedCode = setInterval(this.tick, 20);

  }
  tick = () =>
  {
    if(this.timeRemaining <= 0)
    {
      if(this.onComplete){this.onComplete();}
      this.pauseTimer();
    }
    else
    {
      if(this.onTick){this.onTick(this.timeRemaining);}
      this.timeRemaining = this.timeRemaining-0.02;
    }
  }
  //pause timer
  pauseTimer = () =>
  {
    
    clearInterval(this.returnedCode);
  }
  //getter method
  get timeRemaining()
  {return parseFloat(durationInput.value);}
  //setter method
  set timeRemaining(time){durationInput.value = time.toFixed(2);}
}
