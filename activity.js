class Activity {
  constructor(category, color, description, minutes, seconds) {
    this.category = category;
    this.color = color;
    this.description = description;
    this.minutes = minutes;
    this.seconds = seconds;
    this.completed = false;
    this.id = Date.now();
  };

  markComplete() {
    this.completed = true;
  };

    countdown(minutes, seconds) {
      if (!this.completed){
        this.markComplete();
        var interval = setInterval( function() {
          if (seconds > 0) {
            seconds = seconds - 1;
          } else if (minutes > 0 && seconds == 0) {
            minutes = minutes - 1;
            seconds = 59;
          } else if (minutes == 0 && seconds == 0) {
            minutes = minutes.toString().padStart(2, '0');
            seconds = seconds.toString().padStart(2, '0');
            startTimerBtn.innerText = "COMPLETE!";
            show(logActivityBtn);
            clearInterval(interval);
            return timerDisplay.innerText = "YOU ROCK!";
          }
            minutes = minutes.toString().padStart(2, '0');
            seconds = seconds.toString().padStart(2, '0');
            timerDisplay.innerText = `${minutes}:${seconds}`}, 1000)
     }
  };


  saveToStorage() {
    var savedActivities = parseData() || [];
    savedActivities.push(this);
    stringifyData(savedActivities);
  }
};
