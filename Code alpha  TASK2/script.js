const display = document.getElementById("display");

const buttons = document.querySelectorAll("button");

buttons.forEach(button => {

button.addEventListener("click", () => {

const value = button.textContent;

if(value === "AC"){

display.value = "";

}

else if(value === "DEL"){

display.value = display.value.slice(0,-1);

}

else if(value === "="){

try{

display.value = eval(display.value);

}

catch{

display.value = "Error";

}

}

else{

display.value += value;

}

});

});

document.addEventListener("keydown",(e)=>{

const key = e.key;

if(
(key >= "0" && key <= "9") ||
key === "+" ||
key === "-" ||
key === "*" ||
key === "/" ||
key === "." ||
key === "%"
){

display.value += key;

}

else if(key === "Enter"){

try{

display.value = eval(display.value);

}

catch{

display.value = "Error";

}

}

else if(key === "Backspace"){

display.value = display.value.slice(0,-1);

}

else if(key === "Escape"){

display.value = "";

}

});