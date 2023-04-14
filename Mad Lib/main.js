// Mad Lib by Sasha S

// Add an event listener to the button to run the MadLib function
document.getElementById("btn").addEventListener("click", MadLib);
// Mad Lib code in a function
function MadLib() {
  // INPUT
let enterafamilymember = document.getElementById("enterafamilymember").value;
let enterapluralnoun = document.getElementById("enterapluralnoun").value;
let enteranaction = document.getElementById("enteranaction").value;

// PROCESS
let msg = `my ${enterafamilymember} loves to ${enterapluralnoun} and then ${enteranaction}`
// OUTPUT
document.getElementById("output").innerHTML = msg;
}

