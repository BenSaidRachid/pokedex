
function getPokemonType(pokemons) {
    const types = Object.entries(pokemons).filter(pokemon => pokemon[0].match(/^type\d+$/) && pokemon[1].length > 0)
    return types;
}

function getTypePath(types) {
    let imageArr = [];
    for(let i = 0; i < types.length; i++) {
        const type = types[i][1].toLowerCase();
        const imagePath = `./type_pokemon/${type}.png`;
        imageArr.push(imagePath);
    }
    return imageArr;
}

function getAltImage(imagePath) {
    const altImage = imagePath.match(/.*\/(\w*).png/) || [];
    return altImage.length === 2 ? altImage[1] : "";
}

function sort(arrObj) {
    return arrObj.sort((a, b) => parseInt(a.ndex) - parseInt(b.ndex));
}

function filterPokemon(search, pokemons) {
    const regex = new RegExp(`^${search}`, "i");
    return pokemons.filter(function(pokemon) {
        if(pokemon.nom.match(regex)) return pokemon;
    })
}
  
export default {
    getPokemonType,
    getTypePath,
    getAltImage,
    sort,
    filterPokemon
};
  