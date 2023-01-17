const DOM = {
  display: document.getElementById("display"),
  input: document.getElementById("myText"),
  form: document.getElementById("form"),
};
DOM.form.addEventListener("submit", function (event) {
  event.preventDefault();
  getData(DOM.input.value);
});
async function getData(pokemon) {
  try {
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    if (response.status < 200 || response.status > 299) {
      throw error(response);
    } else {
      const data = await response.json();
      console.log(data);
      console.log(data.sprites.front_default);
      DOM.display.insertAdjacentHTML(
        "beforeend",
        `<div class="card">   
        <img src="${data.sprites.front_default}" class="img"></img>
        <img src="${data.sprites.front_shiny}" class="img"></img>
          <h2>${data.name}</h2>
          </div>`
      );
    }
  } catch (error) {
    console.log(error);
    console.log("sad");
  }
}