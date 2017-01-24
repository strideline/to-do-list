var myForm = $('#myForm');
// var myForm = document.getElementById('myForm');
var list = $('#list')
// var listedItems = document.getElementById('list');


// .on('action', 'on this part of the page', function() {'does what'});
list.on('click', 'li .button', function(e) {
  $(event.target).parent().fadeOut(300, function() {
    event.target.parentNode.remove();
  });
  // event.target.parentNode.remove(); vanilla js way
});

myForm.submit(function(e) {
  event.preventDefault();

  var toDo = $('#todo-input').val();
  // var toDo = event.target.toDo.value;

//`` FOR NEW LINES instead of '' which must be in ONE LINE
  list.prepend(
    `<li>
      <p>` + toDo + `</p>
      <button class="button"></button>
      <div class="clearfix"></div>
    </li>`
  );
  // var listItem = document.createElement('li');
  // var deleteButton = document.createElement('button');
  // var clearDiv = document.createElement('div');
  $('#todo-input').val('');
});
// myForm.addEventListener('submit', function(e) {});