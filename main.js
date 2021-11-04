var savedActivites = [];


var studyBtn = document.querySelector(".study-button");
var meditateBtn = document.querySelector(".meditate-button");
var exerciseBtn = document.querySelector(".exercise-button");
var startActivityBtn = document.querySelector(".start-activity-button");
var studyImg = document.querySelector(".study-img");
var studyImgActive = document.querySelector(".study-img-active");
var meditateImg = document.querySelector(".meditate-img");
var meditateImgActive = document.querySelector(".meditate-img-active");
var exerciseImg = document.querySelector(".exercise-img");
var exerciseImgActive = document.querySelector(".exercise-img-active");
var activityInput = document.querySelector(".accomplish-input");
var minutesInput = document.getElementById("minutes-input");
var secondsInput = document.getElementById("seconds-input");
var activityError = document.querySelector(".description-error");
var minutesError = document.querySelector(".minutes-error");
var secondsError = document.querySelector(".seconds-error");
var currentActivityView = document.querySelector(".current-activity");
var newActivityView = document.querySelector(".new-activity");
var startTimerBtn = document.querySelector(".start-timer-button");
var descriptionDisplay = document.querySelector(".current-description");
var timerDisplay = document.querySelector(".timer");

var currentActivity = {};

var activityCategory = '';

studyBtn.addEventListener("click", activateStudy);
meditateBtn.addEventListener("click", activateMeditate);
exerciseBtn.addEventListener("click", activateExercise);
startActivityBtn.addEventListener("click", startActivity);
startTimerBtn.addEventListener("click", start);

function updateDescription() {
  descriptionDisplay.innerText = activityInput.value;
}

function updateTimer() {
  currentActivity.minutes = currentActivity.minutes.toString().padStart(2, '0');
  currentActivity.seconds = currentActivity.seconds.toString().padStart(2, '0');
  timerDisplay.innerText = `${currentActivity.minutes}:${currentActivity.seconds}`;
}

function start() {
  currentActivity.countdown(currentActivity.minutes, currentActivity.seconds);
}

function show(element) {
  element.classList.remove("hidden");
};

function hide(element) {
  element.classList.add("hidden");
};

function viewCurrentActivity(view, vanish) {
  show(view);
  hide(vanish);
};

function startActivity() {
  throwError();
  createActivity();
  viewCurrentActivity(currentActivityView, newActivityView);
  updateDescription();
  updateTimer();
};



function createActivity() {
  currentActivity = {};
  currentActivity = new Activity (activityCategory, activityInput.value, minutesInput.value, secondsInput.value);
  //console.log(currentActivity);
};

function assignCategory(category) {
  activityCategory = category;
};


function addErrorStyling(input) {
  input.classList.add("error");
};

function removeErrorStyling(input) {
  input.classList.remove("error");
};

function throwError() {
  if (!activityInput.value) {
    addErrorStyling(activityInput);
    show(activityError);
  } if (!minutesInput.value) {
    addErrorStyling(minutesInput);
    show(minutesError);
  } if (!secondsInput.value) {
    addErrorStyling(secondsInput);
    show(secondsError);
  }
  removeError();
};

function removeError() {
  if (activityInput.value) {
    removeErrorStyling(activityInput);
    hide(activityError);
  } if (minutesInput.value) {
    removeErrorStyling(minutesInput);
    hide(minutesError);
  } if (secondsInput.value) {
    removeErrorStyling(secondsInput);
    hide(secondsError);
  }
};




function changeImgColor(whiteImg, activeImg) {
  show(activeImg);
  hide(whiteImg);
};


function activateStudy() {
  studyBtn.classList.add("study-button-color");
  changeImgColor(studyImg, studyImgActive)
  assignCategory("Study");
  startTimerBtn.classList.add("study-button-color");
};


function activateMeditate() {
  meditateBtn.classList.add("meditate-button-color");
  changeImgColor(meditateImg, meditateImgActive);
  assignCategory("Meditate");
  startTimerBtn.classList.add("meditate-button-color");
};


function activateExercise() {
  exerciseBtn.classList.add("exercise-button-color");
  changeImgColor(exerciseImg, exerciseImgActive);
  assignCategory("Exercise");
  startTimerBtn.classList.add("exercise-button-color");
};
