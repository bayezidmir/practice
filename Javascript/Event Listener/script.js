var len = document.querySelectorAll(".btn").length;

for (var i = 0; i < len; i++) {
  var button = document.querySelectorAll(".btn")[i];
  button.addEventListener("click", function () {
    var text = this.innerHTML;
    console.log(text);
    playAudio(text);
    playAnim(text);
  });
}

// adding sound on key press

function playAudio(text) {
  switch (text) {
    case "A":
      var audio = new Audio("audio/a.m4a");
      audio.play();
      break;

    case "B":
      var audio = new Audio("audio/b.m4a");
      audio.play();
      break;

    case "C":
      var audio = new Audio("audio/c.m4a");
      audio.play();
      break;
  }
}

// adding animation on key press

function playAnim(text) {
  var certainButton = document.querySelector("." + text);
  certainButton.classList.add("effect");

  setTimeout(function () {
    certainButton.classList.remove("effect");
  }, 3000);
}

// Function to use keyboard to see animation and sound

document.addEventListener("keypress", function (keyboard) {
  var text = keyboard.key;
  playAudio(text);
  playAnim(text);
});
