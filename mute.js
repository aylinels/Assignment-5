// getting element "p"
var p = document.getElementById("p");
// add an event listener to p
p.addEventListener("click", createCircle);

// getting element "l2"
var l = document.getElementById("l2");
// adding an event listener to "l2"
l.addEventListener("click", ElongateL);

// getting element "a"
var a = document.getElementById("a");
// adding an hover event listener to "a"
a.addEventListener("mouseover", MoveA);
// when mouse if not over element, the element will go back
a.addEventListener("mouseout", MoveBackA);

window.alert("Instructions: Press on P to add more circles, hover over A to make it move, press on L to elongate it, and hover over Y to shake it");

function MoveA() {
  // element a will be moved -800px to the top
  a.style.top = "-800px";
}

function MoveBackA() {
  // element "a" will go back to its original position
  a.style.top = "-400px";
}

function ElongateL() {
  // adding animation to "l2"
  l.classList.add("animation");
}

function createCircle() {
  //creating a div
  var circle = document.createElement("div");
  // randomizing the position of the circles from left to right (between 0px and 1500px)
  circle.style.left = Math.random() * 1500 + "px";
  // randomizing the position of the circles from top to bottom (between 0px and 800px)
  circle.style.top = Math.random() * 1500 + "px";
  circle.id = i;
  // assigning div to css style
  circle.classList.add("circle");
  // get container
  var container = document.getElementById("container");
  // attach div to container
  container.appendChild(circle);
}

// creating 30 circles
for (i = 0; i < 30; i++) {
  createCircle();
}

function random() {
  var body = document.getElementById("body");
  var random = Math.random();
  console.log(random);
  if (random < 0.25) {
    document.body.style.backgroundColor = "#f7eb4d";
  } else {
    document.body.style.backgroundColor = "pink";
  }

}
random()

function RandomColorCircle() {
  var circle = document.getElementsByClassName("circle");
  var random = Math.random();
  console.log(random);
  for (i = 0; i < circle.length; i++){
  if (random < 0.25) {
    circle[i].style.backgroundColor = "white";
  } else {
    console.log("yes", circle)
    circle[i].style.backgroundColor = "#faf7cc";
  }
  }
}
RandomColorCircle()
