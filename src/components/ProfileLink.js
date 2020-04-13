import React from "react";
import { Image } from "react-bootstrap";

export function ProfileLink({ data }) {
  return (
    <a
      href={data.url}
      target="_blank"
      rel="noopener noreferrer"
      className="stretched-link"
    >
      <Image src={data.image} rounded />
    </a>
  );
}
