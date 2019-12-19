const urls = {
    root: "/",
    pokemons: {
        base: "/pokemons",
        getOne: id => id ? `/pokemons/${id}` : `/pokemons/:id`
    }
};
  
export default urls;
  