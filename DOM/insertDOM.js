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

//don't change this line
if (typeof module !== "undefined") {
  module.exports = addItem;
}
