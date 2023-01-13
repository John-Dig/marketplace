//business logic





//ui logic any code that accesses or interacts with the DOM
window.onload = function() {
  let form = document.querySelector("form");
  form.addEventListener("submit", function(e){
    e.preventDefault();
    console.log("it gets here");
    //function should get selection
    let prob = (document.querySelector("selection")).value;
 console.log(prob);

   
  });

}



// function handleSelection(event){
//   event.preventDefault();
//   console.log(getElementById("selection"));

// }


// window.addEventListener("load", function(){
  
//   console.log('hello');
//   item = document.getElementById("selection").value;
//   event.preventDefault();
//   console.log(item);

// })