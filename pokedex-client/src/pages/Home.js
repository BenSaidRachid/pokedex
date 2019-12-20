import React, {Component} from 'react';
import { Container, Col, Row, Card } from "react-bootstrap";
import { api, utils } from "./../helpers";
import PokemonCard from "./../components/Pokemon/Card";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
           pokemons: []
        };
    }

    componentDidMount() {
       this.getPokemons()
    }

    getPokemons = async () => {
        const pokemons = await api.getAll();
        if(pokemons) {
            this.setState({
                pokemons: utils.sort(pokemons)
            })
        }
    }
   
    render() {
        return (
            <Container>
                <Row>
                   {this.state.pokemons.map(pokemon =>
                    <Col key={pokemon.numéro}>
                        <PokemonCard pokemon={pokemon} />
                    </Col>
                   )} 
                </Row>
            </Container>
        );
    
    }
}

export default Home;
