import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import profiles from "../../data/profiles.json"

class Profiles extends Component {
    render() {
        return (
            <div>
                These are my profiles.
            
                {profiles.map(profile => <Container><a href={profile.url}>{profile.name}</a></Container>)}
            </div>
        );
    }
}

export default Profiles;