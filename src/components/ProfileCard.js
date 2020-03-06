import React from "react";
import { Card } from "react-bootstrap";

export function ProfileCard({ data }) {
  return (
    <Card className="h-100 shadow-sm bg-white rounded" href="google.com">
      <Card.Img variant="top" src={data.image} />
      <a
        href={data.url}
        target="_blank"
        rel="noopener noreferrer"
        class="stretched-link"
      >
        <Card.Body className="d-flex flex-column">
          <div className="d-flex mb-2 justify-content-between">
            <Card.Title className="mb-0 font-weight-bold">
              {data.name}
            </Card.Title>
          </div>
        </Card.Body>
      </a>
    </Card>
  );
}
