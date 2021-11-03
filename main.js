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

studyBtn.addEventListener("click", activateStudyColor);
meditateBtn.addEventListener("click", activateMeditateColor);
exerciseBtn.addEventListener("click", activateExerciseColor);
startActivityBtn.addEventListener("click", startActivity);

function startActivity() {
  throwError()
}
// change colors
// add in error image + text
//
function addErrorStyling(input) {
  input.classList.add("error");
}

function removeErrorStyling(input) {
  input.classList.remove("error");
}

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
}

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


function activateStudyColor() {
  studyBtn.classList.add("study-button-color");
  changeImgColor(studyImg, studyImgActive)
};


function activateMeditateColor() {
  meditateBtn.classList.add("meditate-button-color");
  changeImgColor(meditateImg, meditateImgActive)
};


function activateExerciseColor() {
  exerciseBtn.classList.add("exercise-button-color");
  changeImgColor(exerciseImg, exerciseImgActive);
};
