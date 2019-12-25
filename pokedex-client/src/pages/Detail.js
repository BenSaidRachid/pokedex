import React, {Component} from 'react';
import { Container, Col, Row, Alert } from "react-bootstrap";
import { api, utils } from "./../helpers";

class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
           pokemon: {}
        };
    }

    componentDidMount() {
       this.getPokemon();
    }

    getPokemon = async () => {
        const { id } = this.props.match.params;
        const pokemon = await api.getOneById(parseInt(id));
        this.setState({
            pokemon: pokemon
        });
        console.log(pokemon)
    }
   
    render() {
        const {pokemon} = this.state;
        return (
            <Container>
                {
                    Object.entries(pokemon).length > 0 ?
                    <div>
                        <Row style={{justifyContent: "center", margin: "2rem", alignItems: "baseline"}}>
                            <h1 style={{marginRight: "2rem"}}>{pokemon.nom}</h1>
                            <h3 className="text-muted">N° {pokemon.ndex}</h3>
                        </Row>
                        <Row>
                            <div>
                                <img 
                                    className="border"
                                    style={{backgroundColor: "#F2F2F2"}}
                                    src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokemon.ndex}.png`}
                                    alt={pokemon.nom}/>
                            </div>
                            <div className="border rounded" style={{display: "flex", marginLeft: "2rem",backgroundColor: "#30A7D7"}}>
                                <div style={{margin: "1rem", marginRight: "7rem"}}>
                                    <p style={{color: "#fff"}}>Taille</p>
                                    <p>{`${pokemon.taille} m`}</p>
                                </div>
                                
                            </div>
                        </Row>
                    </div> : <Row style={{margin: "5em"}}><Col><Alert variant="danger">No pokemon found</Alert></Col></Row>
                }
            </Container>
        );
    
    }
}

export default Detail;
