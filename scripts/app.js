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
    form: document.querySelector("#form"),
    button : document.getElementById("btn"), 
    delete : document.getElementById("del"),
    input1 : document.getElementById("input1"),
    input2 : document.getElementById("input2"),
    text : document.querySelector("p"),
};
function synth(DOMSelectors){
    DOMSelectors.text.insertAdjacentHTML("afterend", `<p>Your new favorite color is ${DOMSelectors.input1.value} ${DOMSelectors.input2.value}~</p>`)
}
DOMSelectors.form.addEventListener("submit", function(event){
        event.preventDefault();
        synth(DOMSelectors);
        DOMSelectors.input1.value = "";
        DOMSelectors.input2.value = "";
    }
);
DOMSelectors.delete.addEventListener("click", function(){

}
);