document.addEventListener('DOMContentLoaded', onLoadContent);

function onClickYay() {
  console.log("clicked");
}

function onLoadContent() {

    //this button shoud get value from input yay-input
    //and when we press the button we should add a new li to our things-list
  document
    .getElementById('yay-input')
    .addEventListener('change', function () {
      let newItem = document.getElementById('yay-input'.input;
      console.log("new list item: ", newItem);
    })
}

function keyInputAddItem () {
  console.log("change input value: ", this.value);

}


let arr = ["thing", 2, 5.0, "string2", "hello", 5, 6];

let numbers = [];

let content =[];

for (var i = 0; i < arr.length; i++) {
  if(typeof arr[i] === 'string'){
    content.push(arr[i]);
  } else if (typeof arr[i] === 'number'){
    numbers.push(arr[i]);
  }

}



var ulList = document.getElementById('things-list')

for (var i = 0; i < content.length; i++) {
  let listItem = document.createElement('li');
  listItem.textContent = content[i];
  ulList.append(listItem);
}
