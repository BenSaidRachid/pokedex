
function getPokemonType(pokemons) {
    const types = Object.entries(pokemons).filter(function(pokemon) {
        if(pokemon[0].match(/^type\d+$/)) return pokemon;
    });
    return types;
}

function getTypeImage(types) {
    let imageArr = [];
    for(let i = 0; i < types.length; i++) {
        const type = types[i][1].toLowerCase();
        const imagePath = `../../assets/type_pokemon/${type}.png`;
        imageArr.push(imagePath)
    }
    return imageArr;
}

function sort(arrObj) {
    return arrObj.sort((a, b) => parseInt(a.ndex) - parseInt(b.ndex))
}
  
export default {
    getPokemonType,
    getTypeImage,
    sort
};
  