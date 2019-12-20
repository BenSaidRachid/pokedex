import React from 'react';
import { Card } from "react-bootstrap";
import { utils, urls } from "./../../helpers";
import { Link } from "react-router-dom";

function PokemonCard({pokemon}) {
    const pokemonImgType = utils.getTypeImage(utils.getPokemonType(pokemon));
    const id = parseInt(pokemon.ndex)
    return (
        <Link to={urls.pokemons.getOne(id)}>
            <Card style={{ width: '18rem', margin: '1rem' }}>
                <Card.Body>
                    <Card.Img src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokemon.ndex}.png`} />
                    <Card.Subtitle className="mb-2 text-muted">N° {pokemon.ndex}</Card.Subtitle>
                    <Card.Title>{pokemon.nom}</Card.Title>
                </Card.Body>
            </Card>
        </Link>
    );
}

export default PokemonCard;
