import React, {Component} from 'react';
import { Container, Col, Row, Card } from "react-bootstrap";
import { api, utils } from "./../helpers";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
           pokemon: {}
        };
    }

    componentDidMount() {
       this.getPokemon()
    }

    getPokemon = async () => {
        const { id } = this.props.match.params;
        const pokemon = await api.getOneById(parseInt(id));
        console.log(pokemon)
    }
   
    render() {
        return (
            <Container>
                <Row>
                   
                </Row>
            </Container>
        );
    
    }
}

export default Home;
