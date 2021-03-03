import React, { Component } from 'react';
import { Container, Col, Row, Jumbotron, Nav, Card } from 'react-bootstrap';

class Home extends Component {
    render() {
        return (
            <Container>
                <Row><Col><Card><Card.Header>This</Card.Header></Card></Col></Row>
                <Row><Col><h3><br/>Why are you here?</h3><br/></Col></Row>
                <Row>
                    <Col>
                        <Nav.Link href="/professional" style={{ fontSize: "25px" }}>
                            <Card><Card.Header>I might want to hire you.</Card.Header><Card.Img src="./images/work-desk.jpg"/></Card>
                        </Nav.Link>
                    </Col>
                    <Col>
                        <Nav.Link href="/social" style={{ fontSize: "25px" }}>
                            <Card><Card.Header>I just think you're a cool dude.</Card.Header><Card.Img src="./images/social.jpg"/></Card>
                        </Nav.Link>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Home;