var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });

}

document.addEventListener("keypress", function(event) {

  makeSound(event.key);

  buttonAnimation(event.key);

});


function makeSound(key) {

  switch (key) {
    case "w":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "a":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "s":
      var kick-bass = new Audio('sounds/kick-bass.mp3');
      kick-bass.play();
      break;

    case "d":
      var tom-1 = new Audio('sounds/tom-1.mp3');
      tom-1.play();
      break;

    case "j":
      var tom-2 = new Audio('sounds/tom-2.mp3');
      tom-2.play();
      break;

    case "k":
      var tom-3 = new Audio('sounds/tom-3.mp3');
      tom-3.play();
      break;

    case "l":
      var tom-4 = new Audio('sounds/tom-4.mp3');
      tom-4.play();
      break;


    default: console.log(key);

  }
}


function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}
