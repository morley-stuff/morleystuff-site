import React, { Component } from 'react';
import { Container,Card, Form } from 'react-bootstrap';

class Home extends Component {
    render() {
        return (
            <Container>
                <h3>Josh Morley</h3>
                <p>DevOps Engineer</p>
                <div style={{borderStyle: "solid", borderRadius: 20, marginTop: "25px"}}>
                    <p style={{fontWeight: "bold"}}>Current Location</p>
                    <p>Warsaw, Poland</p>
                </div>
                <div style={{borderStyle: "solid", borderRadius: 20, marginTop: "25px"}}>
                    <p style={{fontWeight: "bold"}}>Current Position</p>
                    <p>Java Developer</p>
                </div>
            </Container>
        );
    }
}

export default Home;