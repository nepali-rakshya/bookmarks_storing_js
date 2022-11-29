// creating a new element anchor tag --> a

let newA = document.createElement("a");
let actualLink = document.getElementsByClassName("container")[0];

// adding a title to the anchor tag --> a = "title"

let title = document.getElementById("title");

function highTitle() {
  title.addEventListener("keypress", (event) => {
    title = document.getElementById("title").value;
    if (event.key === "Enter") {
      alert(title);
    }
    newA.innerText = `${title}`;
    return title;
  });
  return title;
}

// adding link to the anchor tag --> a = "link"

let webLink = document.getElementById("link");

webLink.addEventListener("keypress", function bmLink(event) {
  webLink = document.getElementById("link").value;
  if (event.key === "Enter") {
    alert(webLink);
  }

  return webLink;
});

let valve = highTitle();
console.log(valve);
// console.log(bmTitle());

// actualLink.append(newA);
// newA.setAttribute("href", `${webLink}`);
