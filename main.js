var button = document.getElementById("enter");
var iteminput = document.getElementById("inputitem");
var ul = document.querySelector("ul");

var lists = document.querySelectorAll("li");

// add done class to existing lists
function strike() {
  this.classList.toggle("done");
}

function start() {
  var i;
  for (i = 0; i < lists.length; i++) {
    lists[i].addEventListener("click", strike);
  }
  addDeleteToExisting();
}

function inputLength() {
  return iteminput.value.length;
}

// Create new button for delete
function newDeleteButton() {
  var but = document.createElement("button");
  but.innerHTML = "delete";
  but.classList.add("close");
  but.addEventListener("click", deleteElement)
  return but;
}
function deleteElement() {
  this.parentNode.parentNode.removeChild(this.parentNode);
}
// Add Delete button to every list
function addDeleteToExisting() {
  var li = document.querySelectorAll("li");
  var i;

  for (i = 0; i < li.length; i++) {
    var but = newDeleteButton();
    li[i].innerHTML = li[i].innerHTML + "  ";
    li[i].appendChild(but);
  }
}

function addListElement() {
  var li = document.createElement("li");
  var but = newDeleteButton();
  li.appendChild(document.createTextNode(iteminput.value));
  li.innerHTML += "   ";
  li.appendChild(but);
  ul.appendChild(li);
  iteminput.value = "";
}

function clickListener() {
  if (inputLength() > 0) {
    addListElement();
  }
}

function keyboardListener(event) {
  if (inputLength() > 0 && event.which === 13) {
    addListElement();
  }
}

function addDoneToli() {}
button.addEventListener("click", clickListener);
iteminput.addEventListener("keypress", keyboardListener);

for (i = 0; i < lists.length; i++) {
  lists[0].addEventListener("click", addDoneToli);
}

start();
// function clicker() {
//   var msg = "click!!!";
//   console.log(msg);
// }

// function deja() {
//   var msg = "Dejaaa";
//   console.log(msg);
// }

// function vu() {
//   var msg = "vuuuuuu";
//   console.log(msg);
// }

// var button = document.getElementsByTagName("button")[0];
// button.addEventListener("click", clicker);
// button.addEventListener("mouseleave", deja);
// button.addEventListener("mouseenter", vu);
