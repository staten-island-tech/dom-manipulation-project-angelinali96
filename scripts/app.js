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
    delete : document.querySelectorAll(".del"),
    input1 : document.getElementById("input1"),
    input2 : document.getElementById("input2"),
    input3 : document.getElementById("input3"),
    text : document.querySelector("p"),
    res : document.querySelector(".result")
};
const newColor = {
    input1: DOMSelectors.input1,
    input2: DOMSelectors.input2,
    input3: DOMSelectors.input3
};
function addRes(DOMSelectors){
    DOMSelectors.res.insertAdjacentHTML("afterbegin", `<div class="card">
    <p>Your new favorite color is ${newColor.input1.value} ${newColor.input2.value} ${newColor.input3.value}~</p>
    <button class="del">remove</button>
    </div>`)
}
DOMSelectors.form.addEventListener("submit", function(event){
        event.preventDefault();
        addRes(DOMSelectors);
        DOMSelectors.input1.value = "";
        DOMSelectors.input2.value = "";
        DOMSelectors.input3.value = "";
        removeRes();
    }
);
function removeRes(){
    const delButton = document.querySelectorAll(".del");
    delButton.forEach(
        (del) => del.addEventListener("click", function(){
            del.parentElement.remove();
            //del.parentElement.style.display = none;
        })
    );
}

//const album; addcard; clearfields; addremovebutton