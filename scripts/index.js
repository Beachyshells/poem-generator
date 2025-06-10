function displayPoem(response) {
  new Typewriter("#poem-text", {
    strings: response.data.answer,
    autoStart: true,
    delay: 40,
    cursor: "",
  });
  console.log(response.data);
}

function generatePoem(event) {
  event.preventDefault();
  let apiKey = "b9aaeaaf97004f2a03afob830bt63baf";

  let searchfield = document.querySelector("#inspiration");
  let inspirationInput = searchfield.value;
  let prompt = `Generate a poem about ${inspirationInput}`;

  let context =
    "You are a funny poem expert who writes short poems which are all about programming. Each poem will be 1 stanzas- The stanza will be 6 lines, formatted as two lines, seperated with an hr in color: rgb(203, 127, 224), 2 lines,seperated with an hr in color: rgb(203, 127, 224), 2 lines.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  console.log("Generating a poem");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  axios.get(apiUrl).then(displayPoem);
}

let buttonElement = document.querySelector("#button");
buttonElement.addEventListener("click", generatePoem);
