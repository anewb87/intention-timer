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
var currentActivity = document.querySelector(".current-activity");
var newActivity = document.querySelector(".new-activity")

var currentActivity = {};

var activityCategory = '';

studyBtn.addEventListener("click", activateStudy);
meditateBtn.addEventListener("click", activateMeditate);
exerciseBtn.addEventListener("click", activateExercise);
startActivityBtn.addEventListener("click", startActivity);

function viewCurrentActivity() {
  show(currentActivity);
  hide(newActivity);
//fix this!

};

function startActivity() {
  throwError();
  createActivity();
  viewCurrentActivity()
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

function show(element) {
  element.classList.remove("hidden")
};

function hide(element) {
  element.classList.add("hidden")
};


function changeImgColor(whiteImg, activeImg) {
  show(activeImg);
  hide(whiteImg);
};


function activateStudy() {
  studyBtn.classList.add("study-button-color");
  changeImgColor(studyImg, studyImgActive)
  assignCategory("Study");
};


function activateMeditate() {
  meditateBtn.classList.add("meditate-button-color");
  changeImgColor(meditateImg, meditateImgActive);
  assignCategory("Meditate");
};


function activateExercise() {
  exerciseBtn.classList.add("exercise-button-color");
  changeImgColor(exerciseImg, exerciseImgActive);
  assignCategory("Exercise");
};
