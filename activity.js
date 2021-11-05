class Activity {
  constructor(category, description, minutes, seconds) {
    this.category = category;
    this.description = description;
    this.minutes = minutes;
    this.seconds = seconds;
    this.completed = false;
    this.id = Date.now();
  }

  countdown(minutes, seconds){
    setInterval( function(){
    if(seconds > 0){
      seconds = seconds - 1;
    } else if (minutes > 0 && seconds == 0) {
      minutes = minutes - 1;
      seconds = 59;
    } else if (minutes == 0 && seconds == 0) {
      minutes = minutes.toString().padStart(2, '0');
      seconds = seconds.toString().padStart(2, '0');
      document.querySelector(".start-timer-button").innerText = "COMPLETE!";
      return document.querySelector(".timer").innerText = "YES!"
    }
     minutes = minutes.toString().padStart(2, '0');
     seconds = seconds.toString().padStart(2, '0');
    document.querySelector(".timer").innerText = `${minutes}:${seconds}`}, 1000)
  }

  markComplete() {
    this.completed = true;
  }

  saveToStorage() {
  }
}
