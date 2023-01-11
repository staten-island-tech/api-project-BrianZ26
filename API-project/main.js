const pokemon = "charmander";
//const pokeinfo = `https://pokeapi.co/api/v2/pokemon/charmander`;
const pokeinfo = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
async function getData(pokeinfo) {
  try {
    const response = await fetch(pokeinfo);
    if (response.status < 200 || response.status > 299) {
      console.log(response.status);
      throw error(response);
    } else {
      const data = await response.json();
      console.log();
    }
  } catch (error) {
    console.log(error);
    console.log("sad");
  }
}
getData(pokemon);
