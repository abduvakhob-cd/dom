"use strict";
// const greeting = document.getElementById(`greeting`);
// paragraph = document.getElementsByTagName(`p`);
// greeting.style.color = `red`;
// greeting.style.background = `black`;
// wrapper= document.getElementsByClassName(`wrapper`)
// greeting.classList.remove(`CSSh1`);
// console.log(paragraph);

const wrapper = document.querySelector(".wrapper"),
  btn = document.querySelectorAll("button");

for (let i = 0; i < btn.length; i++) {
  btn[i].style.padding = "20px";
  btn[i].style.background = "gold";
}

btn.forEach((btn) => {
  btn.style.bacground = "black";
  btn.style.border = "none";
});
console.log(btn);
