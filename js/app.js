//exercício 1

let myBtn1 = document.getElementById("btn1");
myBtn1.onclick = function () {
  myBtn1.style.backgroundColor = "pink";
};

let myBtn2 = document.querySelector("#btn2");
myBtn2.onclick = function () {
  myBtn2.style.backgroundColor = "yellow";
};

let myBtn3 = document.querySelector("#btn3");
myBtn3.onclick = function () {
  myBtn3.style.backgroundColor = "orange";
};

//exercício 2, 3 e 4

let addTextBtn = document.querySelector("#addText");
let myDiv = document.querySelector("div");
let addParagraph = document.createElement("p");
let mySize = 20;
function aumentar() {
  mySize = mySize + 5;
  addParagraph.style.fontSize = mySize + "px";
  addParagraph.style.textAlign = "center";
}
function diminuir() {
  mySize = mySize - 5;
  addParagraph.style.fontSize = mySize + "px";
  addParagraph.style.textAlign = "right";
}
function clicar() {
  addParagraph.innerText =
    "É só mais um esforço para o curso de Front-end e serei um grande programador.";
  myDiv.appendChild(addParagraph);
  let increaseBtn = document.createElement("button");
  increaseBtn.innerText = "Aumentar texto";
  let decreaseBtn = document.createElement("button");
  decreaseBtn.innerText = "Diminuir texto";
  myDiv.appendChild(increaseBtn);
  myDiv.appendChild(decreaseBtn);
  increaseBtn.addEventListener("click", aumentar);
  decreaseBtn.addEventListener("click", diminuir);
}

addTextBtn.addEventListener("click", clicar);

//exercício 5

let listEweb = document.querySelectorAll("li");
let aprenderBtn = document.querySelector("#btnAprender");
aprenderBtn.onclick = function () {
  for (item of listEweb) {
    item.append(" : Aprendido");
  }
};

//exercício 6

let aprenderMais = document.querySelector("#aprenderMais");
aprenderMais.onclick = function () {
  let userAnswer = prompt("O que aprendeste mais?");
  let novaLi = document.createElement("li");
  novaLi.innerText = userAnswer;
  let listUl = document.querySelector("ul");
  listUl.appendChild(novaLi);
};
