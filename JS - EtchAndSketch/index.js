
//Playground code
let numberOfDivs = 16;

for (let i = 0; i < numberOfDivs; i++) {
    let div = document.createElement("div");
    div.className = "grid-cell";
    let text = document.createTextNode("this is a div");
    div.appendChild(text);

    let element = document.getElementById("grid");
    element.appendChild(div);
}

