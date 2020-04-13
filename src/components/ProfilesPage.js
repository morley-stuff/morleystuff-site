import React from "react";

import { Row, Col } from "react-bootstrap";
import { ProfileLink } from "./ProfileLink";

function ProfilesPage(props) {
  return (
    <Row className="profiles">
      {props.profiles.map(data => (
        <Col xs={3} md={2} className="my-3" key={`${data.id}`}>
          <ProfileLink data={data} />
        </Col>
      ))}
    </Row>
  );
}

export default ProfilesPage;
