/* Declare variables below to save the different sections (divs) of your story*/

let title = document.querySelector(".title"); 
let buttons = document.querySelector(".buttons");
let storyOpening = document.querySelector(".story-opening");
let optionOne = document.querySelector(".option-one");
let optionTwo = document.querySelector(".option-two");
let optionThree = document.querySelector(".option-three"); 
let optionFour = document.querySelector(".option-four");
let optionOneScreen = document.querySelector(".option-one-screen");
let optionTwoScreen = document.querySelector(".option-two-screen");
let optionOneEnd = document.querySelector(".option-one-end");
let optionTwoEnd = document.querySelector(".option-two-end");



optionOne.onclick=function(){
  optionOneScreen.style.display = "block";
  storyOpening.style.display = "none";
  title.style.display = "none";
  buttons.style.display = "none";
 
};

optionTwo.onclick=function(){
optionTwoScreen.style.display = "block";
  storyOpening.style.display = "none";
  title.style.display = "none";
  buttons.style.display = "none";
  
};


optionThree.onclick=function(){
optionOneEnd.style.display = "block";
optionOneScreen.style.display = "none";
storyOpening.style.display = "none";
title.style.display = "none";
buttons.style.display = "none"; 

};


optionFour.onclick=function(){
  optionTwoEnd.style.display = "block";
  storyOpening.style.display = "none";
  title.style.display = "none";
  buttons.style.display = "none";
optionTwoScreen.style.display = "none";
}



