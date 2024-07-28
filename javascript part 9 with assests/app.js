let input=document.createElement("input");
let button=document.createElement("button");
button.innerText="click me!!!";

document.querySelector("body").append(input);
document.querySelector("body").append(button);

button.setAttribute("id","btn");
input.setAttribute("placeholder","user name");

let btn=document.querySelector("#btn");
btn.classList.add("btnbg");

let h1=document.createElement("h1");
h1.innerText="DOM Practice";

h1.classList.add("dec");

document.querySelector("body").append(h1);

let para=document.createElement("para");
para.innerHTML="Apna college <b>delta</b> Practice";

document.querySelector("body").append(para);
