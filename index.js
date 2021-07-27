const dodger = document.getElementById("dodger"); 

//test 1 

function moveDodgerLeft(){
  const leftNumbers = dodger.style.left.replace("px", ""); // whatever we put in second arguement will replace what we put into the first  
  const left = parseInt(leftNumbers, 10); //we need to change value of leftNumbers from a string to an integer to execute some kind of math


  if (left > 0) {
    dodger.style.left = `${left - 10}px`;
  }
}

document.addEventListener("keydown", function(event) {
  if (event.key === "ArrowLeft") {
    moveDodgerLeft();
  }
}); 

//test 2 



  function moveDodgerRight() {
    const rightNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(rightNumbers, 10);
  
    if (left < 360) {
      dodger.style.left = `${left + 10}px`;
    }
  } 
  
  document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowRight") {
      moveDodgerRight();
    }
  }); 















// const dodger = document.getElementById("dodger"); 

// function moveDodgerLeft() {
//     const leftNumbers = dodger.style.left.replace("px", "");
//     const left = parseInt(leftNumbers, 10);
  
//     if (left > 0) {
//       dodger.style.left = `${left - 1}px`;
//     }
//   } 
  
//   document.addEventListener("keydown", function(e) {
//     if (e.key === "ArrowLeft") {
//       moveDodgerLeft();
//     }
//   }); 




//   function moveDodgerRight() {
//     const rightNumbers = dodger.style.left.replace("px", "");
//     const right = parseInt(rightNumbers, 10);
  
//     if (right < 180) {
//       dodger.style.left = `${left + 1}px`;
//     }
//   } 
  
//   document.addEventListener("keydown", function(e) {
//     if (e.key === "ArrowRight") {
//       moveDodgerRight();
//     }
//   }); 