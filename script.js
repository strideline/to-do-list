var myForm = document.getElementById('myForm');
var listedItems = document.getElementById('list');
var toDo = document.getElementById('copy');
// var list = document.getElementById('list');
// var box = document.getElementById()

myForm.addEventListener('submit', function(e) {
  event.preventDefault();
  var listItem = document.createElement('li');
  listItem.innerHTML = toDo.value;
  listedItems.appendChild(listItem);
  event.target.toDo.value = '';
});

// list.addEventListener('click', function(e){
//   list.

// });