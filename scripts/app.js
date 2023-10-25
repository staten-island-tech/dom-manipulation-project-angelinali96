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
    const one = hex2rgb(newColor.input1.value);
    const two = hex2rgb(newColor.input2.value);
    const three = hex2rgb(newColor.input3.value);
    const mix1 = Math.round((one[0] + two[0] + three[0])/3);
    const mix2 = Math.round((one[1] + two[1] + three[1])/3);
    const mix3 = Math.round((one[2] + two[2] + three[2])/3);
    const resColor = `rgba(${mix1},${mix2},${mix3})`;
    DOMSelectors.res.insertAdjacentHTML("afterbegin", `<div class="card" style="background-color: ${resColor}">
    <p>Your new favorite color is ${resColor}~</p>
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
  function hex2rgb(hex){
    const r = parseInt(hex.slice(1,3),16);
    const g = parseInt(hex.slice(3,5),16);
    const b = parseInt(hex.slice(5,7),16);
    return [r,g,b];
  }