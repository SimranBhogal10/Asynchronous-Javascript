let form = document.getElementById("input-field");

form.addEventListener("mouseover", hoverEvent);
form.addEventListener("mouseout", outEvent);
form.addEventListener("keydown", inputValidation);

function hoverEvent(event) {
  console.log(event.type);
  form.style.boxShadow = "0px 0px 6px 1px rgba(82, 168, 236, 0.6)";
}

function outEvent(event) {
  form.style.boxShadow = "none";
}

function inputValidation(event) {
  console.log(event.key);
  if (event.key >= 0 && event.key <= 9) {
    alert("Numbers cannot be inputted");
    event.preventDefault();
  }
}
