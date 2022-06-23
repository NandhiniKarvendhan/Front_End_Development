// Create a new list item when clicking on the "Add" button
function addItem() {
  let inputValue = document.getElementById("myInput").value;
  let item = document.createElement("li");
  let textNode = document.createTextNode(inputValue);
  item.appendChild(textNode);
  if (inputValue === "") {
    alert("You must type something");
  } else {
    let list = document.getElementById("myTODOs");
    list.appendChild(item);
  }
  document.getElementById("myInput").value = "";
}
// Add a "line-through" style when clicking on a list item
var li = document.querySelector("ul");

li.addEventListener(
  "click",
  function (event) {
    if (event.target.tagName === "LI") {
      event.target.classList.toggle("checked");
    }
  },
  false
);

//don't change this line
if (typeof module !== "undefined") {
  module.exports = addItem;
}
