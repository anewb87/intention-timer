var studyBtn = document.querySelector(".study-button");
var meditateBtn = document.querySelector(".meditate-button");
var exerciseBtn = document.querySelector(".exercise-button");
var studyImg = document.querySelector(".study-img");
var studyImgActive = document.querySelector(".study-img-active");
var meditateImg = document.querySelector(".meditate-img");
var meditateImgActive = document.querySelector(".meditate-img-active");
var exerciseImg = document.querySelector(".exercise-img")
var exerciseImgActive = document.querySelector(".exercise-img-active")


studyBtn.addEventListener("click", activateStudyColor);
meditateBtn.addEventListener("click", activateMeditateColor);
exerciseBtn.addEventListener("click", activateExerciseColor);

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
