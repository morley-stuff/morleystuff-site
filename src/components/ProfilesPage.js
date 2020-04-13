import React from "react";

import { Row, Col } from "react-bootstrap";
import { ProfileCard } from "./ProfileCard";

function ProfilesPage(props) {
  return (
    <Row>
      {props.profiles.map(data => (
        <Col xs={3} md={2} className="mb-5" key={`${data.id}`}>
          <ProfileCard data={data} />
        </Col>
      ))}
    </Row>
  );
}

export default ProfilesPage;
