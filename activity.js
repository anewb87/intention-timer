class Activity {
  constructor(category, description, minutes, seconds) {
    this.category = category;
    this.description = description;
    this.minutes = minutes;
    this.seconds = seconds;
    this.completed = false;
    this.id = Date.now();
  }

  countdown() {
    var timeSet = new Date().getTime();
    timeSet.setMinutes(this.minutes, this.seconds);

    var counter = setInterval(function() {
      var currentTime = new Date().getTime();
      var timeLeft = timeSet - currentTime;

      this.minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

      document.querySelector(".timer").innerHTML = `${this.minutes}:${this.seconds}`;

      if (timeLeft < 0) {

      }
    }, 1000);
  }

  markComplete() {
    this.completed = true;
  }

  saveToStorage() {
    clearInterval(counter);
    document.querySelector(".start-timer-button").innerHTML = "COMPLETE!";
  }
}




// <p id="demo"></p>
//
// <script>
// // Set the date we're counting down to
// var countDownDate = new Date("Jan 5, 2021 15:37:25").getTime();
//
// // Update the count down every 1 second
// var x = setInterval(function() {
//
//   // Get today's date and time
//   var now = new Date().getTime();
//
//   // Find the distance between now and the count down date
//   var distance = countDownDate - now;
//
//   // Time calculations for days, hours, minutes and seconds
//   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//   var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//   var seconds = Math.floor((distance % (1000 * 60)) / 1000);
//
//   // Display the result in the element with id="demo"
//   document.getElementById("demo").innerHTML = days + "d " + hours + "h "
//   + minutes + "m " + seconds + "s ";
//
//   // If the count down is finished, write some text
//   if (distance < 0) {
//     clearInterval(x);
//     document.getElementById("demo").innerHTML = "EXPIRED";
//   }
// }, 1000);
// </script>
