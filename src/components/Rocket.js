import React from 'react';
import PropTypes from 'prop-types';
import {
  Col, Image, ListGroup, Row, Badge, Button,
} from 'react-bootstrap';

const Rocket = (
  {
    name, description, flickrImage,
  },
) => (
  <ListGroup.Item className="bg-light  mb-1">
    <Row>
      <Col xs={2} style={{ width: 'fit-content' }}>
        <Image width="300" height="180" src={flickrImage} rounded />
      </Col>
      <Col>
        <h3>{name}</h3>

        <span>
          <Badge bg="info" pill>
            Reserved
          </Badge>
          {' '}
        </span>
        {description}
        <br />
        <br />
        <Button className="reserve-button rounded" variant="primary">Reserve Rocket</Button>
      </Col>
    </Row>
  </ListGroup.Item>

);

Rocket.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  flickrImage: PropTypes.string.isRequired,
};

export default Rocket;
