

//Counter to allow differentiation betw ids for to list rows
//so that it is easier to delete
var counterItem = 0;

//a counter to help toggle between complete and incomplete states
var counterCompletion = 1;


//Function deletes items added to the list
function deleteTask(e) {
  //console.log (e);
  var todolist = document.querySelector('#todolist');
  var currentRow = e.target.parentNode;
  console.log(currentRow);
  todolist.removeChild(currentRow);

}


//function that can toggle between complete and incoplete tasks
function completeTask(e) {
  counterCompletion++;
  var completed = e.target;
  console.log(completed);

//Function to verify whether a task has been checked before
  if (counterCompletion%2 === 0) {
    completed.innerHTML = 'COMPLETED';
    completed.setAttribute ('class', 'complete');
  } else {
    completed.innerHTML = 'Done?';
    completed.setAttribute ('class', 'completion');
  }


}


//Function to list all the tasks added in the textarea
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
  //text area input
  var textCont = document.getElementById('myTextarea').value;
  var listItems = document.createElement('p');
  listItems.setAttribute('class', 'inputItems');
  listItems.innerHTML = textCont;
  document.getElementById(counterItemId).appendChild(listItems);

  //tracking completion inside the row div
  var progressTracker = document.createElement ('p');
  progressTracker.innerHTML = 'Done?';
  progressTracker.setAttribute('class', 'completion');       //class for styling in CSS
  progressTracker.addEventListener('click',completeTask);
  document.getElementById(counterItemId).appendChild(progressTracker);


  //creating a delete Button inside the div button
  var delButton = document.createElement('button');
  var divDelButton = document.createElement('div');
  divDelButton.setAttribute('class', 'divDeleteButton');
  var buttonLabel = document.createTextNode ('delete');
  delButton.setAttribute('class','btn btn-primary');
  delButton.appendChild(buttonLabel);
  delButton.addEventListener ('click', deleteTask);
  divDelButton.appendChild(delButton);
  //delButton.onclick = deletTask; ****(personal note) to be able to access event properties in the delete function have to use addEventListener
  document.getElementById(counterItemId).appendChild(divDelButton);

}

//Function to create a category
function createCategory() {
    var todoListCat = document.querySelector("#todolist");


  var categoryName= document.querySelector("#categoryTextArea").value;
  // Make a div - put a h3 inside - color the dive - append it all to the cattarea
  var divCategoryName = document.createElement("div");
  divCategoryName.setAttribute('class',"divCategoryTitle");
  var PCategoryName = document.createElement("h2");
  PCategoryName.innerHTML = categoryName;
  divCategoryName.appendChild(PCategoryName);



  var header = document.createElement('h4');
  var headerText = document.createTextNode ("List the items you need");
  header.setAttribute ('id',"we");
  header.appendChild(headerText);

  var textInput = document.createElement ("textarea");
  textInput.setAttribute('id',"myTextarea");
  textInput.setAttribute('class',"form-control");
  textInput.setAttribute('placeholder', "what is important?");

  var buttonForAddTask = document.createElement("button");
  var buttonForAddTaskText = document.createTextNode("Add");
  buttonForAddTask.setAttribute('class', "btn btn-primary");
  buttonForAddTask.appendChild(buttonForAddTaskText);
  buttonForAddTask.addEventListener('click', addTask);


  todoListCat.appendChild(divCategoryName);
  todoListCat.appendChild(header);
  todoListCat.appendChild(textInput);
  todoListCat.appendChild(buttonForAddTask);

}
