document.getElementById("we").style.color = "blue";

var addButton = document.getElementById("add");
var deleteButton = document.getElementById("delete");

function addTask() {
  console.log ("add is running");

}

function deleteTask() {
  console.log ("delete is running");

}

function showImage(){
  console.log ("show image is running");

  var pic = document.createElement("img");

  pic.setAttribute("src","http://4.bp.blogspot.com/-2Rahyeo7Buw/UilCqtayhaI/AAAAAAAABAQ/WCDeVBDZzkc/s1600/cute_babies_high_quality_4-normal.jpg");
  pic.setAttribute("id","image");

  console.log(pic);
  console.log (document.querySelector("#imgContainer"));
  document.querySelector("#imgContainer").appendChild(pic);
}

// function fa() {
//   var headerr= document.getElementById('add');
// console.log(headerr);
// var mouse = "house";
// headerr.parentNode.style.backgroundColor = "red";
// //addButton.backgroundColor = "orange";
// // var x1 = headerr.property.style.Color;
// // console.log(x1);
// }
// fa();
