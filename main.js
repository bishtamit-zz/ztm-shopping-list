var button = document.getElementById("enter");
var iteminput = document.getElementById("inputitem");
var ul = document.querySelector("ul");

var lists = document.querySelectorAll("li");

// add done class to list element
function strike() {
  this.classList.toggle("done");
}

// starts the page with delete button to existing list elements
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
  but.addEventListener("click", deleteElement);
  return but;
}

// Delete list element
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

// new list element with strike and button enabled
function addListElement() {
  var li = document.createElement("li");
  var but = newDeleteButton();
  li.addEventListener("click", strike);
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

button.addEventListener("click", clickListener);
iteminput.addEventListener("keypress", keyboardListener);

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
