document.getElementById("we").style.color = "blue";

//Counter to allow differentiation betw ids for to list rows
//so that it is easier to delete
var counterItem = 0;

//a counter to help toggle between complete and incomplete states
var counterCompletion = 1;

function deleteTask(e) {
  console.log (e);
  var todolist = document.querySelector('#todolist');
  var currentRow = e.target.parentNode;
  console.log(currentRow);
  todolist.removeChild(currentRow);

}

function completeTask(e) {
  counterCompletion++;
  var completed = e.target;
  console.log(completed);

  if (counterCompletion%2 === 0) {
    completed.innerHTML = 'COMPLETED';
    completed.setAttribute ('class', 'complete');
  } else {
    completed.innerHTML = 'Done?';
    completed.setAttribute ('class', 'completion');
  }


}

function addTask() {
  counterItem++;
  var counterItemId = counterItem.toString();   //turning counter into a String
  //console.log(counterItemId);

  //creating bootstrap rows with unique ids using counter
  var divRow = document.createElement("div");
  divRow.setAttribute ('class','row');
  divRow.setAttribute('id',counterItemId);
  document.querySelector('#todolist').appendChild(divRow);


  //creating a paragraph element inside the row dive to display
  //text area input, delete button, and completion status
  //Paragraph:
  var textCont = document.getElementById('myTextarea').value;
  var listItems = document.createElement('p');
  listItems.setAttribute('class', 'inputItems');
  listItems.innerHTML = textCont;
  document.getElementById(counterItemId).appendChild(listItems);

  //completion  completed?  COMPLETE
  var progressTracker = document.createElement ('p');
  progressTracker.innerHTML = 'Done?';
  progressTracker.setAttribute('class', 'completion');       //class for styling in CSS
  progressTracker.addEventListener('click',completeTask);
  document.getElementById(counterItemId).appendChild(progressTracker);


  //delete Button:
  var delButton = document.createElement('button');
  var buttonLabel = document.createTextNode ('delete');
  delButton.appendChild(buttonLabel);
  //delButton.setAttribute('id',counterItemId);           //allows tracking which row to delete in deletTask Function
  delButton.addEventListener ('click', deleteTask);
  //delButton.onclick = deletTask; ****to be able to access event properties in the delete function have to use addEventListener
  document.getElementById(counterItemId).appendChild(delButton);

}
