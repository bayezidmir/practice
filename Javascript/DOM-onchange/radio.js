var gender = document.querySelectorAll("input[name=sex]");
console.log(gender);

Array.from(gender).map((sex) => {
  sex.addEventListener("change", genderHandler);
});

function genderHandler(e) {
  if (e.target.checked);
  console.log(e.target.value);
}
