document.getElementById("we").style.color = "blue";




function deleteTask(y) {
  console.log (y);

}



//Counter to allow differentiation betw ids for to list rows
//so that it is easier to delete
var counterItem = 0;

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
  var listItems = document.createElement('p');
  listItems.setAttribute('id', 'inputItems');
  document.getElementById(counterItemId).appendChild(listItems);

  //delete Button:
  var delButton = document.createElement('button');
  var buttonLabel = document.createTextNode ('delete');
  delButton.appendChild(buttonLabel);
  delButton.setAttribute('id',counterItemId);           //allows tracking which row to delete in deletTask Function
  delButton.addEventListener ('click', deleteTask);
  //delButton.onclick = deletTask; ****to be able to access event properties in the delete function have to use addEventListener
  document.getElementById(counterItemId).appendChild(delButton);


  //completion
  



var x = document.getElementById(counterItemId);
console.log(x);

  // var x = document.getElementById('todolist');
  // console.log(x);
  //
  //
  // var textInput= document.getElementsByTagName("textarea")[0].value;
  // console.log(textInput);




  // //console.log(x[0]);
  // var textCont = textBox.value;
  // console.log(textCont);
  // document.querySelector('.items').innerHTML = textCont;

}

// <div class= "row">
//   <p class= "items"></p>
// </div>



//showing an image after clicking a button
// function showImage(){
//   console.log ("show image is running");
//
//   var pic = document.createElement("img");
//
//   pic.setAttribute("src","http://4.bp.blogspot.com/-2Rahyeo7Buw/UilCqtayhaI/AAAAAAAABAQ/WCDeVBDZzkc/s1600/cute_babies_high_quality_4-normal.jpg");
//   pic.setAttribute("id","image");
//
//   console.log(pic);
//   console.log (document.querySelector("#imgContainer"));
//   document.querySelector("#imgContainer").appendChild(pic);
// }

//removes an image ; not only parents can remove
function removeImg(){
  console.log("remove");
}
//Showing alternating images after clicking buttons
function showImage(imgIdentifier) {

  var imgSource;
  var imgId;
  if (imgIdentifier=="baby"){
      imgSource = "http://4.bp.blogspot.com/-2Rahyeo7Buw/UilCqtayhaI/AAAAAAAABAQ/WCDeVBDZzkc/s1600/cute_babies_high_quality_4-normal.jpg";
      imgId = "baby";
  } else if (imgIdentifier =="dog"){
      imgSource = "https://images-na.ssl-images-amazon.com/images/G/01/img15/pet-products/small-tiles/23695_pets_vertical_store_dogs_small_tile_8._CB312176604_.jpg";
      imgId = "dog";
  }

  var pic = document.createElement("img");
  pic.setAttribute("src", imgSource);
  pic.setAttribute("id", imgId);
  document.querySelector("#imgContainer").appendChild(pic);

  //make the images removable by adding an event listener; remember only parents can Remove
  pic.addEventListener("click", removeImg);




}
