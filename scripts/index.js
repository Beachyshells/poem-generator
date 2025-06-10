function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem-text", {
    strings: "The Poem will go here",
    autoStart: true,
    delay: 50,
    cursor: "",
  });
}

let buttonElement = document.querySelector("#button");
buttonElement.addEventListener("click", generatePoem);
