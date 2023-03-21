let notes = document.getElementsbyClassname("scratchpad_holder");

notes.addEventListener("keydown", eventFunction);

function eventFunction(event) {
  console.log(event.key);
}
