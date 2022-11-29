// let url = prompt("Enter url", "rakshya");

// console.log(form.value);
// console.log(v);

let form = document.getElementById("title");

form.addEventListener("keypress", (event) => {
  form = document.getElementById("title").value;
  if (event.key === "Enter") {
    alert(form);
  }
});

let newE = document.createElement("a");
let link = document.getElementsByClassName("container")[0];
link.append(newE);
newE.setAttribute("href", "www.google.com");
document.write(newE);
