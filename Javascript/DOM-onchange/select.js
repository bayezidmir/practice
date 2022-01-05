var homeDistrict = document.querySelector("#home");
console.log(homeDistrict);

homeDistrict.addEventListener("change", districtPicker);

function districtPicker(e) {
  console.log(e.target.value);
}
