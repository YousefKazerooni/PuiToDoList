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


//Showing alternating images after clicking buttons
function showImage(imgIdentifier) {

  var imgSource;
  if (imgIdentifier=="baby"){
      imgSource = "http://4.bp.blogspot.com/-2Rahyeo7Buw/UilCqtayhaI/AAAAAAAABAQ/WCDeVBDZzkc/s1600/cute_babies_high_quality_4-normal.jpg";
  } else if (imgIdentifier =="dog"){
      imgSource = "https://images-na.ssl-images-amazon.com/images/G/01/img15/pet-products/small-tiles/23695_pets_vertical_store_dogs_small_tile_8._CB312176604_.jpg";
  }

  var pic = document.createElement("img");
  pic.setAttribute("src", imgSource);
  document.querySelector("#imgContainer").appendChild(pic);


}
