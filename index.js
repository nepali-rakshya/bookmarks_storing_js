let titleText = document.getElementById("title");
let linkText = document.getElementById("link");

let valueTitle, valueLink;

function valueTT() {
  valueTitle = titleText.value;
  return valueTitle;
}

function valueL() {
  valueLink = linkText.value;
  return valueLink;
}

function storeValues() {
  let web = document.getElementsByTagName("tbody")[0];
  let newTR = document.createElement("tr");
  let newTD1 = document.createElement("td");
  let newTD2 = document.createElement("td");
  let newA = document.createElement("a");
  newA.innerText = valueTT();
  newA.setAttribute("href", valueL());
  newA.setAttribute("target", "_blank");
  newTD1.append(newA);
  newTD2.innerText = valueL();
  newTR.append(newTD1, newTD2);
  web.append(newTR);
  let tableHead = document.getElementsByTagName("th")[0];
  let tableHead2 = document.getElementsByTagName("th")[1];
  tableHead.classList.add("bottomBorder");
  tableHead2.classList.add("bottomBorder");
}

let button = document.getElementsByTagName("button")[0];

button.addEventListener("click", () => {
  storeValues();
});
