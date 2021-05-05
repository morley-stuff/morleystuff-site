import React, { Component } from 'react';
import { Card, Row, Col, Container, ListGroup } from 'react-bootstrap';

class Home extends Component {
    render() {
        return (
            <Container>
                <Row className="justify-content-md-center">
                <Col md="auto">
                <Card className="my-3">
                    <Card.Title style={{fontSize: 30, fontWeight: "bold"}}>Josh Morley</Card.Title>
                    <Card.Subtitle className="text-muted mb-2">DevOps Engineer</Card.Subtitle>
                </Card>
                <Card className="my-3">
                    <Card.Header style={{fontSize: 20, fontWeight: "bold"}}>About me</Card.Header>
                    <Card.Text className="m-2">Australian DevOps Engineer with over 3 years of experience.</Card.Text>
                    <Card.Text className="m-2">Currently based in Warsaw, Poland.</Card.Text>
                </Card>
                <Card className="my-3">
                    <Card.Header>Most used technologies</Card.Header>
                    <ListGroup>
                        <ListGroup.Item>Jenkins</ListGroup.Item>
                        <ListGroup.Item>Shell scripting</ListGroup.Item>
                        <ListGroup.Item>Docker</ListGroup.Item>
                        <ListGroup.Item>Java / Maven</ListGroup.Item>
                        <ListGroup.Item>AWS Cloud</ListGroup.Item>
                    </ListGroup>
                </Card>
                </Col>
                </Row>
            </Container>
        );
    }
}

export default Home;