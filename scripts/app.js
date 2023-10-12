/*
Using JavaScript you will allow users to input information into a form. The
form will then push data from a JavaScript object into the HTML through
DOM manipulation. The project must contain the following
-Create an object called “DOMSelectors” to hold your DOM Selectors
-Create a function that creates an object and calls the following functions
-Create a function that injects the newly created object into the DOM
-Create a function that clears the input fields after injecting the object
-Create a function to remove an object after they have been created
*/
const DOMSelectors = {
    button : document.getElementById("btn"), 
    input1 : document.getElementById("input1"),
    input2 : document.getElementById("input2"),
    text : document.querySelector("p"),
};
function synth(inputs){
    DOMSelectors.text.insertAdjacentHTML("afterend", `<strong>Your new favorite color is ${DOMSelectors.input1.value} ${inputs.item2}~</strong>`)
}
const inputs = {
    item1: DOMSelectors.input1.value,
    item2: DOMSelectors.input2.value
};
DOMSelectors.button.addEventListener("click", function(){
        synth(inputs);
        console.log(DOMSelectors.input1.value);
    }
);