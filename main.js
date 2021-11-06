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
var categoryError = document.querySelector(".category-error");
var activityError = document.querySelector(".description-error");
var minutesError = document.querySelector(".minutes-error");
var secondsError = document.querySelector(".seconds-error");
var currentActivityView = document.querySelector(".current-activity");
var newActivityView = document.querySelector(".new-activity");
var startTimerBtn = document.querySelector(".start-timer-button");
var descriptionDisplay = document.querySelector(".current-description");
var timerDisplay = document.querySelector(".timer");
var logActivityBtn = document.querySelector(".log-activity-button");
//var pastActivitiesView = document.querySelector(".past-activities-container");
var cardContainer = document.querySelector(".cards-container");
var completedActivityView = document.querySelector(".completed-activity-view");

var savedActivities = [];
var currentActivity = {};
var activityCategory = undefined;

studyBtn.addEventListener("click", activateStudy);
meditateBtn.addEventListener("click", activateMeditate);
exerciseBtn.addEventListener("click", activateExercise);
startActivityBtn.addEventListener("click", startActivity);
startTimerBtn.addEventListener("click", start);
logActivityBtn.addEventListener("click", logActivity);


function saveCard() {
  savedActivities.push(currentActivity)
};

function logActivity() {
  saveCard();
  cardContainer.innerHTML = '';
  for (var i = 0; i < savedActivities.length; i++) {
    cardContainer.innerHTML +=
    `<section class="card">
      <section class="card-text">
        <p class="card-header">${savedActivities[i].category}</p>
        <p class="card-time">${savedActivities[i].minutes} MIN ${savedActivities[i].seconds} SECONDS</p>
        <p class="card-description">${savedActivities[i].description}</p>
      </section>
      <section class="category-color-bar"></section>
    </section>`
  }
  updateView(completedActivityView, currentActivityView);
};

function updateDescription() {
  descriptionDisplay.innerText = activityInput.value;
};

function updateTimer() {
  currentActivity.minutes = currentActivity.minutes.toString().padStart(2, '0');
  currentActivity.seconds = currentActivity.seconds.toString().padStart(2, '0');
  timerDisplay.innerText = `${currentActivity.minutes}:${currentActivity.seconds}`;
};

function start() {
  currentActivity.countdown(currentActivity.minutes, currentActivity.seconds);
};

function show(element) {
  element.classList.remove("hidden");
};

function hide(element) {
  element.classList.add("hidden");
};

function updateView(view, vanish) {
  show(view);
  hide(vanish);
};

function startActivity() {
  throwError();
  if (activityCategory && activityInput.value && minutesInput.value && secondsInput.value ) {
    createActivity();
    updateView(currentActivityView, newActivityView);
    updateDescription();
    updateTimer();
  }
};

function createActivity() {
  currentActivity = {};
  currentActivity = new Activity(activityCategory, activityInput.value, minutesInput.value, secondsInput.value);
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
  }if (!activityCategory) {
    show(categoryError)
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
  } if (activityCategory) {
    hide(categoryError);
  }
};




function changeImgColor(whiteImg, activeImg) {
  show(activeImg);
  hide(whiteImg);
};

function removeColor(){
  hide(studyImgActive);
  show(studyImg);
  hide(meditateImgActive);
  show(meditateImg);
  hide(exerciseImgActive);
  show(exerciseImg);
  removeClass(studyBtn, "study-button-color");
  removeClass(meditateBtn, "meditate-button-color");
  removeClass(exerciseBtn, "exercise-button-color");
  clearColor();
}

function addClass(variableName, className){
  variableName.classList.add(className);
  startTimerBtn.classList.add(className);
}

function clearColor(){
  startTimerBtn.classList.remove("study-button-color");
  startTimerBtn.classList.remove("meditate-button-color");
  startTimerBtn.classList.remove("exercise-button-color");
}

function removeClass(variableName, className){
    variableName.classList.remove(className);
}

function activateStudy() {
  removeColor();
  addClass(studyBtn, "study-button-color");
  changeImgColor(studyImg, studyImgActive);
  assignCategory("Study");
};


function activateMeditate() {
  removeColor();
  addClass(meditateBtn, "meditate-button-color");
  changeImgColor(meditateImg, meditateImgActive);
  assignCategory("Meditate");
};


function activateExercise() {
  removeColor();
  addClass(exerciseBtn, "exercise-button-color");
  changeImgColor(exerciseImg, exerciseImgActive);
  assignCategory("Exercise");
};
