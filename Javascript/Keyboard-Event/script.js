var onFocus = document.querySelector("input");
onFocus.addEventListener("blur", function () {
  onFocus.style.backgroundColor = "silver";
  onFocus.style.textDecoration = "underline";
});

onFocus.addEventListener("focus", function () {
  onFocus.style.backgroundColor = "red";
  onFocus.style.fontSize = "36px";
});

// onFocus.addEventListener("focusin", function () {
//   console.log("focusin is occured");
// });

// onFocus.addEventListener("focusout", function () {
//   console.log("focusout is occured");
// });
