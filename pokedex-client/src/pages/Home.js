import React, {Component} from 'react';
import { Container, Col, Row } from "react-bootstrap";
import { api } from "./../helpers/index";

class Home extends Component {
   
    componentDidMount() {
       this.getPokemons()
    }

    getPokemons = async () => {
        const pokemons = await api.getAll();
        console.log(pokemons)
    }
   
    render() {
        return (
            <Container>
                <Row>
                    <Col sm={8}>sm=8</Col>
                    <Col sm={4}>sm=4</Col>
                </Row>
                <Row>
                    <Col sm>sm=true</Col>
                    <Col sm>sm=true</Col>
                    <Col sm>sm=true</Col>
                </Row>
            </Container>
        );
    
    }
}

export default Home;
