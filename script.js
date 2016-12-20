var myForm = document.getElementById('myForm');
var listedItems = document.getElementById('list');
// var toDo = document.getElementById('copy');
// var list = document.getElementById('list');
// var box = document.getElementById()

myForm.addEventListener('submit', function(e) {
  event.preventDefault();
  
  var toDo = event.target.toDo.value;

  var listItem = document.createElement('li');
  var deleteButton = document.createElement('button');
  var clearDiv = document.createElement('div');

  listItem.innerHTML = toDo;
  // listedItems.appendChild(listItem);
  // deleteButton.innerHTML = 'X';
  deleteButton.className = 'button';
  clearDiv.className = 'clearfix';

  deleteButton.addEventListener('click', function(e){
    event.target.parentNode.remove();
  });

  listedItems.appendChild(listItem);
  listedItems.appendChild(deleteButton);
  listedItems.appendChild(clearDiv);

  // toDo.appendChild(listedItems);

  event.target.toDo.value = '';
});

