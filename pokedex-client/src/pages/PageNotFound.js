import React from 'react';
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { urls } from "./../helpers";
import HEADER from './../assets/header.png';

function PageNotFound() {
    return (
      <Container>
        <Row style={{flexDirection: "column", alignItems: "center"}}>
            <Link to={urls.root}>
              <img src={HEADER} alt="Pokémon header" width="450" style={{margin: "2rem"}} />
            </Link>
            <p style={{fontSize: "10em", fontFamily: "Arial"}}>404</p>
            <p style={{fontSize: "5em", fontFamily: "Arial"}}>Page not found</p>
        </Row>
      </Container>
    );
}

export default PageNotFound;
