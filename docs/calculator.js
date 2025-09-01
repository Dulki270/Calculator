window.addEventListener("load", () => {
    refreshField();
})

// input field eka C button eka click empty wenna oni
const refreshField = () => {
    inputField.value = "";
}

// default input field value eka empty
 
const clickNumbers = (element) => {
    // click krna eka concatinate krnw
    inputField.value = inputField.value + element;
     

}

// calculations function
const btnCalculations = () => {
    let inputField = document.getElementById("inputField");
    let inputFieldValue = inputField.value; // get string from input

    if (inputFieldValue) {
        try {
            // Prevent unsafe characters
            if (!/^[0-9+\-*/. ]+$/.test(inputFieldValue)) {  //pattern ekat dla check krnw me impiuts natten errors
                throw new Error("Invalid input");
            }

            // Handle division by zero
            if (inputFieldValue.includes("/0")) {  //0 n bedann dennha
                throw new Error("Cannot divide by zero");
            }

            // Calculate safely using Function constructor (safer than eval)
            let total = Function(`"use strict"; return (${inputFieldValue})`)();

            // Handle NaN or Infinity
            if (!isFinite(total)) {
                throw new Error("Invalid calculation");
            }

            inputField.value = total;
        } catch (error) {
            console.log ("aaaaaaaaaaaaaaaaaaaaa");
            inputField.value = "Error";
        }
    }
};

// const btnCalculations = () => {
//     let inputField = document.getElementById("inputField");
//     let inputFieldValue = inputField.value; // get string from input

//     if (inputFieldValue) {
//         try {
//             let total = eval(inputFieldValue); // calculates + - * /
//             inputField.value = total;
//         } catch (error) {
//             inputField.value = "Error";
//         }
//     }
// }
