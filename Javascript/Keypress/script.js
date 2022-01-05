// Keyboard Letter detector

/*document.addEventListener("keypress", function (event) {
  var receivedAlp = event.key;

  document.querySelector("h3").innerHTML = "You have Pressed " + receivedAlp;
});*/

// wordcount

/*var count = 0;
document
  .querySelector("#wordcount")
  .addEventListener("keypress", function (event) {
    count++;
    var receivedAlp = event.key;

    document.querySelector("h3").innerHTML = "Total word count " + count;
  }); */
// wordcount
var wordCount = 0;
document.addEventListener("keypress", function (event) {
  wordCount++;
  var typed = event.key;

  document.querySelector("h3").innerHTML = "You have written " + wordCount;
});
