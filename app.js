//grab the DOM elements
const startButton = document.getElementById('start');
const pauseButton = document.getElementById('pause');
const durationInput = document.getElementById('durationInput')
const circle =document.querySelector('circle');
//Calculate the perimeter of the circle
const perimeter = circle.getAttribute('r') * Math.PI * 2;

circle.setAttribute('stroke-dasharray', perimeter);

let duration;
//instantiate an instance of Timer class
const timer = new Timer(durationInput, startButton, pauseButton, {
  onStart(totalDuration)
  {
    // this.TotalDuration = totalDuration;
    this.totalDuration = totalDuration;
    let currentOffset = -(perimeter / (totalDuration * 50));
    this.currentOffset = currentOffset;
  },
  onTick(timeremaining)
  {
    circle.setAttribute('stroke-width', '5px')
    circle.setAttribute('stroke-dashoffset', this.currentOffset);
    this.currentOffset =
      this.currentOffset - perimeter / (this.totalDuration * 50);
    
  },
  onComplete(){console.log("time complete")}
});

//reset the timer
const resetTimer = (e) =>
{
  if(e.target.classList.contains('fa-undo-alt'))
  window.location.reload();
}
document.getElementById('reset').addEventListener('click', resetTimer);
