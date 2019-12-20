import React, {Component} from 'react';
import { Container, Col, Row, Card } from "react-bootstrap";
import { api, utils } from "./../helpers";
import PokemonCard from "./../components/Pokemon/Card";
import HEADER from './../assets/header.png';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
           pokemons: [],
           pokemonsFiltered: [],
           search: ""
        };
    }

    componentDidMount() {
       this.getPokemons();
    }

    getPokemons = async () => {
        const pokemons = await api.getAll();
        if(pokemons) {
            this.setState({
                pokemons: utils.sort(pokemons),
                pokemonsFiltered: utils.sort(pokemons)
            });
        }
    }

    searchPokemon = e => {
        const {value} = e.target;
        const pokemonFound = utils.filterPokemon(value, this.state.pokemons);
        this.setState({
            pokemonsFiltered: pokemonFound
        });
    }
   
    render() {
        const {pokemonsFiltered} = this.state;
        return (
            <div>
                <Container>
                    <Row style={{justifyContent: "center"}}>
                        <img src={HEADER} alt="Pokémon header" width="450" style={{margin: "2rem"}} />
                    </Row>
                </Container>
                <Container>
                    <Row style={{justifyContent: "center"}}>
                        <div style={{width: "50%", margin:"2rem"}}>
                            <input 
                                style={{width: "100%", height:"3rem", padding: "1rem", outline: "none"}}
                                className="rounded-pill"
                                placeholder="Search by name"
                                onChange={e => this.searchPokemon(e)}
                            />
                        </div>
                    </Row>
                    <Row>
                    {pokemonsFiltered.map(pokemon =>
                        <Col key={pokemon.numéro}>
                            <PokemonCard pokemon={pokemon} />
                        </Col>
                    )} 
                    </Row>
                </Container>
            </div>
        );
    
    }
}

export default Home;
