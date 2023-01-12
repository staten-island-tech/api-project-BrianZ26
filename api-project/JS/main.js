import { DOM } from "./DOM";
async function getData(pokemon) {
  try {
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    if (response.status < 200 || response.status > 299) {
      throw error(response);
    } else {
      const data = await response.json();
      console.log(data);
      console.log(data.sprites.front_default);
      DOM.display.insertAdjacentHTML(){
      }
    }
  } catch (error) {
    console.log(error);
    console.log("sad");
  }
}
getData("pikachu");
