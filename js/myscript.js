document.getElementById("we").style.color = "blue";

var addButton = document.getElementById("add");
var deleteButton = document.getElementById("delete");

function addTask() {
  console.log ("add is running");

}

function deleteTask() {
  console.log ("delete is running");

}

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
