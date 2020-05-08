// JavaScript File
// let/const statements
let integer;
const zero = 0;
// function to alert whether the input is positive or negative
function integerFunction() {
  // assigns 'integer' to the inputted value
  integer = document.getElementById("input").value;
  // alerts positive when positive
  if (integer > zero) {
    alert("Positive!");
  }
  // alerts negative when negative
  else if (integer < zero) {
    alert("Negative!");
  }
  // only other number is 0; alerts accordingly
  else  {
    alert("Zero is neither positive nor negative...");
  }
}
// event listener that causes function that alerts
document.getElementById("button").addEventListener("click", integerFunction);

