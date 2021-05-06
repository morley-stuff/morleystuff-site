import React, { Component } from 'react';
import { Card, CardDeck, Button, Container } from 'react-bootstrap';

class Projects extends Component {
    render() {
        return (
            <Container>
                <CardDeck className="my-3">
                    <Card border="dark" style={{minWidth: "30rem"}}>
                        <Card.Img src="images/morleystuff-site.png" style={{borderBottomStyle: "solid"}} />
                        <Card.Body>
                            <Card.Title style={{fontSize: 30, fontWeight: "bold"}}>MorleyStuff Site</Card.Title>
                            <Card.Text className="mx-3" style={{textAlign: "left"}}>
                                React Bootstrap site to display my personal projects. It also serves as
                                a single location linking all of my various online profiles.
                            </Card.Text>
                            <Button variant="secondary" className="mx-1" href="https://morleystuff.com">Live</Button>
                            <Button variant="secondary" className="mx-1" href="https://github.com/morley-stuff/morleystuff-site">Src</Button>
                        </Card.Body>
                    </Card>
                    <Card border="dark" style={{minWidth: "30rem"}}>
                        <Card.Body>
                            <Card.Img src="images/terraform.png" style={{borderBottomStyle: "solid"}} />
                            <Card.Title style={{fontSize: 30, fontWeight: "bold"}}>Terraform Repo</Card.Title>
                            <Card.Text className="mx-3" style={{textAlign: "left"}}>
                                Less of a project, this repository stores the terraform definitions for 
                                the things that I need to run on cloud infrastructure. That includes things like
                                this website, build tools, game servers, etc.
                            </Card.Text>
                            <Button variant="secondary" className="mx-1" href="https://github.com/morley-stuff/terraform">Src</Button>
                        </Card.Body>
                    </Card>
                </CardDeck>
            </Container>
        );
    }
}

export default Projects;