import React from "react";
import "./SWCardGrid";
import "./StarWars.css";
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Col
} from "reactstrap";

const SWCard = ({ character }) => {
  return (
    <Col xs="4" sm="4" className="ColumnCardThing">
      <Card>
        <CardBody>
          <CardTitle>{character.name}</CardTitle>
          <CardSubtitle>
            <strong>Gender:</strong> {character.gender}
          </CardSubtitle>
          <CardText>
            <strong>Born:</strong> {character.birth_year}
          </CardText>
          <CardText>
            <strong>Eye Color:</strong> {character.eye_color}
          </CardText>
          <CardText>
            <strong>Hair Color:</strong> {character.hair_color}
          </CardText>
          <CardText>
            <strong>Height:</strong> {character.height}
          </CardText>
          <CardText>
            <strong>Mass:</strong> {character.mass}
          </CardText>
          <CardText>
            <strong>Skin Color:</strong> {character.skin_color}
          </CardText>
        </CardBody>
      </Card>
    </Col>
  );
};

export default SWCard;