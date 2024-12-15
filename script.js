//select the inputBox and all the buttons
const inputBox = document.getElementById("inputBox");
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const value = button.value;
        if (value === "AC") {
            clearInput();
        } else if (value === "DEL") {
            deleteLastChar();
        } else if (value === "=") {
            calculateReslt();
        } else {
            appendToInput(value);
        }
    });
});

//write the funciton to append numbers
function appendToInput(value) {
    inputBox.value += value; //append the buttons value to the input
}

//functon to clear the input box
function clearInput() {
    inputBox.value = ""; //claear the input box
}

//function to delete the last Character
function deleteLastChar() {
    inputBox.value = inputBox.value.slice(0, -1); //remove the last char
}

//Calculate the Result 
function calculateReslt() {
    try {
        inputBox.value = eval(inputBox.value);
    }
    catch (error) {
        console.error("error in calculation:", error);
        inputBox.value = "Error";
    }
}

document.addEventListener("keydown", function(event) {
    const key = event.key;
  
    // If it's a number or operator
    if (/[0-9+\-*/.%]/.test(key)) {
      inputBox.value += key;
    }
  
    // Handle backspace and enter
    if (key === "Backspace") {
      inputBox.value = inputBox.value.slice(0, -1);  // Remove last character
    } else if (key === "Enter") {
      calculateReslt();  // Call the result calculation when Enter is pressed
    }
  });


