var form = document.querySelector("form");
var email = form.querySelector("div #email");
var pass = form.querySelector("div #password");
var student = form.querySelector("div #student");

form.addEventListener("submit", formHandler);
function formHandler(event) {
  event.preventDefault();

  const studentInfo = {
    email: email.value,
    pass: pass.value,
    student: student.value,
  };

  console.log(studentInfo);
  email.value = "";
  pass.value = "";
  student.value = "";
}
