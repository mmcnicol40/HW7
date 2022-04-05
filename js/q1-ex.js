console.log("chap 16");

/*
const showMessage = () => {
  alert("Hello!");
};
*/

function showMsg() {
alert("Hello!");
};

function removeMsg() {
  alert("Remove");
  };

// Access the button
const buttonElement = document.getElementById("myButton");
const buttonElement2 = document.getElementById("myButton2");

// Listen to the "click" event
buttonElement.addEventListener("click", showMsg);

// Remove listener to the "click" event
buttonElement2.addEventListener("click", removeMsg);

// Show event type and target when the user clicks on the button
document.getElementById("myButton").addEventListener("click", e => {
  console.log(`Event type: ${e.type}, target: ${e.target}   ${e.BUBBLING_PHASE}`);
});

// Show event type and target when the user clicks on the button
document.getElementById("myButton2").addEventListener("click", e => {
  console.log(`Event type: ${e.type}, target: ${e.target} `);
});


const keyboardInf = qevent => {
  console.log(`Keyboard event: ${qevent.type}, key: ${qevent.keyCode}`);
};
 
// Integrate this function into key press and release:
document.addEventListener("keypress", keyboardInf);
//tdocument.addEventListener("keyup", keyboardInf);
//tdocument.addEventListener("keydown", keyboardInf);


// Return the name of the mouse button
const getMouseButton = code => {
  let button = "unknown";
  switch (code) {
    case 0: // 0 is the code for the left mouse button
      button = "left";
      break;
    case 1: // 1 is the code for the middle mouse button
      button = "middle";
      break;
    case 2: // 2 is the code for the right button
      button = "right";
      break;
  }
  return button;
};

// Show info about mouse event
const mouseInfo = e => {
  console.log(
    `Mouse event: ${e.type}, button: ${getMouseButton(
      e.button
    )}, X: ${e.clientX}, Y: ${e.clientY}`
  );
};

// Add mouse click event listener
document.addEventListener("click", mouseInfo);
// Handle mouse button press and release
document.addEventListener("mousedown", mouseInfo);
document.addEventListener("mouseup", mouseInfo);

// Web page loading event
window.addEventListener("load", e => {
  console.log("The page has been loaded!");
});

// Handle page closing
window.addEventListener("beforeunload", e => {
  const message = "Should you stay or should you go?";
  // Standard way of showing a confirmation dialog
  e.returnValue = message;
  // Browser-specific way of showing a confirmation dialog
  return message;
});