import React from "react";
import SWCard from "./SWCards";
import { Container, Row, Col } from "reactstrap";

const SWCardGrid = ({ people }) => {
  return (
    <Container>
      <Row>
        {people.map((character, index) => {
          return <SWCard key={index} character={character} />;
        })}
      </Row>
    </Container>
  );
};

export default SWCardGrid;
