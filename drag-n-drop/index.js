function dragStart(e) {
  console.log(e);
  e.dataTransfer.setData("text", e.target.id);
  e.effectAllowed = "copyMove";
}
function dragEnd(e) {
  //   console.log(e.styles);
  e.dataTransfer.clearData();
}
function drop(e) {
  e.preventDefault();
  var data = e.dataTransfer.getData("text");
  //   let nodeSrc = window.getComputedStyle(document.getElementById(data));
  let nodeSrc = document.getElementById(data).style;
  console.log(nodeSrc);
  var nodeCopy = document.getElementById(data).cloneNode(true);
  nodeCopy.removeAttribute('id');
  nodeCopy.removeAttribute("draggable");
  nodeCopy.removeAttribute("ondragstart");
  nodeCopy.removeAttribute("ondragend");
  //   for (const [key, value] of Object.entries(nodeSrc)) {
  //     nodeCopy.style[key] = value;
  //   }
  e.target.appendChild(nodeCopy);
}
function dropOver(e) {
  e.preventDefault();
}
