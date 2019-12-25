import React from 'react';
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { utils, urls } from "./../../helpers";

function PokemonCard({pokemon}) {
    const pokemonImgType = utils.getTypePath(utils.getPokemonType(pokemon));
    const id = parseInt(pokemon.ndex)
    return (
        <Link to={urls.pokemons.getOne(id)}>
            <Card style={{ width: '18rem', margin: '1rem' }}>
                <Card.Body>
                    <Card.Img src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokemon.ndex}.png`} alt={pokemon.nom}/>
                    <Card.Subtitle className="mb-2 text-muted">N° {pokemon.ndex}</Card.Subtitle>
                    <Card.Title>{pokemon.nom}</Card.Title>
                    {pokemonImgType.length > 0 && 
                        <div>
                            {
                                pokemonImgType.map((typeImg, index) => 
                                    <img key={index} src={typeImg} alt={utils.getAltImage(typeImg)} style={{margin: 5}}/>
                                )
                            }
                        </div>
                    }
                </Card.Body>
            </Card>
        </Link>
    );
}

export default PokemonCard;
