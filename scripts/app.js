const DOMSelectors = { //array of domselectors to call
    form: document.querySelector("#form"),
    button : document.getElementById("btn"), 
    delete : document.querySelectorAll(".del"),
    input1 : document.getElementById("input1"),
    input2 : document.getElementById("input2"),
    input3 : document.getElementById("input3"),
    text : document.querySelector("p"),
    res : document.querySelector(".result")
  };
  const newColor = { //inputs
    input1: DOMSelectors.input1,
    input2: DOMSelectors.input2,
    input3: DOMSelectors.input3
  };
  function addRes(DOMSelectors){
    const one = hex2rgb(newColor.input1.value); //retrieves rgb color code from hex inputs
    const two = hex2rgb(newColor.input2.value);
    const three = hex2rgb(newColor.input3.value);
    const mix1 = Math.round((one[0] + two[0] + three[0])/3); //takes average of rgb for respective position & rounds to nearest int
    const mix2 = Math.round((one[1] + two[1] + three[1])/3);
    const mix3 = Math.round((one[2] + two[2] + three[2])/3);
    const resColor = `rgba(${mix1},${mix2},${mix3})`; //averaged color
    DOMSelectors.res.insertAdjacentHTML("afterbegin", `<div class="card" style="background-color: ${resColor}">
    <p>Your new favorite color is ${resColor}~</p>
    <button class="del">remove</button>
    </div>`) //insert html with div color equal to output
  }
  DOMSelectors.form.addEventListener("submit", function(event){
        event.preventDefault(); //prevent reload on submit
        addRes(DOMSelectors);
        DOMSelectors.input1.value = ""; //clear inputs
        DOMSelectors.input2.value = "";
        DOMSelectors.input3.value = "";
        removeRes();
    }
  );
  function removeRes(){
    const delButton = document.querySelectorAll(".del");
    delButton.forEach( //for each delete button generated, event listener of remove is appended
        (del) => del.addEventListener("click", function(){
            del.parentElement.remove();
            //del.parentElement.style.display = none;
        })
    );
  }
  function hex2rgb(hex){ //converts hex code to rgb by slicing into xx xx xx and parsing hex integer
    const r = parseInt(hex.slice(1,3),16);
    const g = parseInt(hex.slice(3,5),16);
    const b = parseInt(hex.slice(5,7),16);
    return [r,g,b];
  }