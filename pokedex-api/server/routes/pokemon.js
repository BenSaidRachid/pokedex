import { Router } from 'express';
import fs from 'fs';
import path from 'path';
import { formatIdToNdex } from './../utils';

const app = Router();
const DATA = 'server/data/pokedex.json';
const data_path = path.resolve(DATA);

app.get('/', (req, res) => {
    if (fs.existsSync(data_path)) {
        const pokemons = require(data_path);
        res.status(200).send({pokemons});
    } else {
        res.status(404).send("File not found");
    }
});

app.get('/:id([0-9]+)', (req, res) => {
    const { id } = req.params;
    if (fs.existsSync(data_path)) {
        const pokemons = require(data_path);
        const pokemon = pokemons.filter(pokemon => pokemon.ndex === formatIdToNdex(parseInt(id)));
        if(pokemon.length > 0)
            res.status(200).send({pokemon});
        else
            res.status(404).send("Pokemon not found");
    } else {
        res.status(404).send("File not found");
    }
});

export default app;