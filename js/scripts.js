//business logic





//ui logic
function handleSelection(event){
  event.preventDefault();
  console.log(getElementById("selection"));

}


window.addEventListener("load", function(){
  
  console.log('hello');
  item = document.getElementById("selection").value;
  event.preventDefault();
  console.log(item);

})