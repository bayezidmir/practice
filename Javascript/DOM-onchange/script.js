var programs = document.querySelectorAll("input[name = program]");
console.log(programs);

// first we have to convert node list (in console) to array.
/*Array.from(programs).map((program) => {
  program.addEventListener("change", programHandler);
});

function programHandler(e) {
  if (e.target.checked) {
    console.log(e.target.value);
  }
}*/
