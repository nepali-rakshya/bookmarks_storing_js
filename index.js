let newA = document.createElement("a");
let actualLink = document.getElementsByClassName("container")[0];

let title = document.getElementById("title");

title.addEventListener("keypress", (event) => {
  title = document.getElementById("title").value;
  if (event.key === "Enter") {
    alert(title);
  }
  newA.innerText = `${title}`;
});

let webLink = document.getElementById("link");

webLink.addEventListener("keypress", (event) => {
  webLink = document.getElementById("link").value;
  if (event.key === "Enter") {
    alert(webLink);
  }
  actualLink.append(newA);
  newA.setAttribute("href", `${webLink}`);
});
