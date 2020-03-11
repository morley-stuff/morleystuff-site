import React from "react";
import { Card } from "react-bootstrap";

export function ProfileCard({ data }) {
  return (
    <Card className="h-100 shadow-sm bg-white rounded" href="google.com">
      <a
        href={data.url}
        target="_blank"
        rel="noopener noreferrer"
        className="stretched-link"
      >
        <Card.Img variant="top" src={data.image} />
      </a>
    </Card>
  );
}
