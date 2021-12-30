document.querySelectorAll("#btn")[0].addEventListener("click", function () {
  var text = this.innerHTML;
  document.querySelector("h1").innerHTML = text + " is clicked";
});

document.getElementById("btn1").addEventListener("click", function () {
  var text = this.innerHTML;
  document.querySelector("h1").innerHTML = text + " is clicked";
});

document.querySelector(".ytd").addEventListener("click", function () {
  var text = this.innerHTML;
  document.querySelector("h1").innerHTML = text + " is clicked";
});
