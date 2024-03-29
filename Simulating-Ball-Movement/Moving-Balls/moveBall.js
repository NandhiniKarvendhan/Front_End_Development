var velocity1 = 2;
var velocity2 = 2;
var position1 = 0;
var position2 = 0;
var targetPixel = 300;

function moveball1() {
  let ball1 = document.getElementById("ball1");
  position1 += velocity1;
  ball1.style.left = position1 + "px";
  if (position1 === 0) {
    velocity1 = +2;
    ball1.style.background = "#5bb302";
    ball1.style.width = 100 + "px";
    ball1.style.height = 100 + "px";
  } else if (position1 === targetPixel) {
    velocity1 = -2;
    ball1.style.background = "black";
    ball1.style.width = 50 + "px";
    ball1.style.height = 50 + "px";
  }
}
setInterval(moveball1, 100);

function moveball2() {
  let ball2 = document.getElementById("ball2");
  position2 += velocity2;
  ball2.style.left = position2 + "px";
  if (position2 === targetPixel) {
    velocity2 = -2;
    ball2.style.width = 100 + "px";
    ball2.style.height = 70 + "px";
  } else if (position2 === 0) {
    velocity2 = 2;
    ball2.style.width = 100 + "px";
    ball2.style.height = 100 + "px";
  }
}
setInterval(moveball2, 100);

let ball3 = document.getElementById("ball3");
let velocity3 = 3;
let position3 = 0;
function moveball3() {
  position3 += velocity3;
  ball3.style.left = position3 + "px";
  if (position3 === targetPixel) {
    velocity3 = -3;
  } else if (position3 === 0) {
    velocity3 = 3;
    ball3.style.width = 70 + "px";
    ball3.style.height = 70 + "px";
  }
}
setInterval(moveball3, 100);

let ball4 = document.getElementById("ball4");
let velocity4 = 1;
let position4 = 0;
function moveball4() {
  position4 += velocity4;
  ball4.style.left = position4 + "px";
  if (position4 === targetPixel) {
    velocity4 = -1;
    ball4.style.border = "40px solid orange";
    ball4.style.width = 20 + "px";
    ball4.style.height = 20 + "px";
  } else if (position4 === 0) {
    velocity4 = 1;
    ball4.style.border = "2px hidden orange";
    ball4.style.width = 100 + "px";
    ball4.style.height = 100 + "px";
  }
}
setInterval(moveball4, 50);

let ball5 = document.getElementById("ball5");
let velocity5 = 2;
let position5 = 0;
function moveball5() {
  position5 += velocity5;
  ball5.style.left = position5 + "px";
  if (position5 === targetPixel) {
    velocity5 = -2;
    ball5.style.background = "cyan";
  } else if (position5 === 0) {
    velocity5 = 2;
    ball5.style.background = "#e98017";
  }
}
setInterval(moveball5, 50);

let ball6 = document.getElementById("ball6");
let velocity6 = 4;
let position6 = 0;
function moveball6() {
  position6 += velocity6;
  ball6.style.left = position6 + "px";
  if (position6 === targetPixel) {
    velocity6 = -4;
    ball6.style.width = 50 + "px";
    ball6.style.height = 100 + "px";
  } else if (position6 === 0) {
    velocity6 = 4;
    ball6.style.width = 100 + "px";
    ball6.style.height = 100 + "px";
  }
}
setInterval(moveball6, 80);

let ball7 = document.getElementById("ball7");
let velocity7 = 3;
let position7 = 0;
function moveball7() {
  position7 += velocity7;
  ball7.style.left = position7 + "px";
  if (position7 === targetPixel) {
    velocity7 = -3;
    ball7.style.borderRadius = "15%";
  } else if (position7 === 0) {
    velocity7 = 3;
    ball7.style.background = "red";
    ball7.style.borderRadius = "50%";
  }
}
setInterval(moveball7, 50);
