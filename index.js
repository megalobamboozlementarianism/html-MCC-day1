function onLoadContent() {
  console.log("loaded");
}

function onClickYay() {
  console.log("clicked");
}

document
  .getElementById('btn-yay')
  .addEventListener('click', onClickYay());

document.addEventListener('DOMContentLoaded', onLoadContent());

// let arr = ["thing", 2, 5.0, [1, 2, 4]];
//
// for (var i = 0; i < arr.length; i++) {
//   arr[i]
// }
