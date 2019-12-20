import urls from "./urls";
import axios from "axios";

const API_BASE_URL = "http://localhost:8080"

const api = {
    getAll: async function() {
        return await axios.get(API_BASE_URL + urls.pokemons.base).then(({data}) => {
            const {pokemons} = data;
            return pokemons;
        })
    },
    getOneById: async function(id) {
        return await axios.get(API_BASE_URL + urls.pokemons.getOne(id)).then(({data}) => {
            const {pokemon} = data;
            return pokemon;
        })
    }
}

export default api;