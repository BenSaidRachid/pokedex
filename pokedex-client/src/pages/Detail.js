import React, {Component} from 'react';
import { Container, Col, Row, Alert, Table, Card } from "react-bootstrap";
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
            pokemon,
        });
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
                        <Row style={{justifyContent: "center"}}>
                            <Col>
                                <Card style={{ width: '100%', margin: '1rem' }}>
                                    <Card.Body>
                                        <Card.Img src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokemon.ndex}.png`} alt={pokemon.nom}/>
                                        <Card.Subtitle className="mb-2 text-muted">N° {pokemon.ndex}</Card.Subtitle>
                                        <Card.Title>{pokemon.nom}</Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>
                            
                            <Col style={{ margin: 15}}>
                                <div>
                                    <div className="border rounded-sm" style={{display: "flex", justifyContent: "center", backgroundColor: "black", padding: 10}}>
                                        <h5 style={{color: "white"}}>Information générale</h5>
                                    </div>
                                    <Table responsive>
                                        <thead>
                                            <tr>
                                                <th>Taille</th>
                                                <th>Poids</th>
                                                <th>Espèce</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>{pokemon.taille} m</td>
                                                <td>{pokemon.poids} kg</td>
                                                <td>{pokemon.espece}</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>

                                <div>
                                    <div style={{display: "flex", flexDirection: "column", margin: 15}}>
                                        <div className="border rounded-sm" style={{display: "flex", justifyContent: "center", backgroundColor: "black", padding: 10}}>
                                            <h5 style={{color: "white"}}>Attaques</h5>
                                        </div>
                                        <Table responsive>
                                            <thead>
                                                <tr>
                                                    <th>Niveau</th>
                                                    <th>Nom</th>
                                                    <th>Puissance</th>
                                                    <th>Précision</th>
                                                    <th>PP</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    pokemon.attaques.map((attaque, index) => 
                                                        <tr key={index}>
                                                            <td>{attaque.niveau}</td>
                                                            <td>{attaque.nom}</td>
                                                            <td>{attaque.puissance}</td>
                                                            <td>{attaque.precision}</td>
                                                            <td>{attaque.pp}</td>
                                                        </tr>
                                                    )
                                                }
                                            </tbody>
                                        </Table>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div> : <Row style={{margin: "5em"}}><Col><Alert variant="danger">No pokemon found</Alert></Col></Row>
                }
            </Container>
        );
    
    }
}

export default Detail;
