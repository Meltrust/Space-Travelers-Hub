import React from 'react';
import PropTypes from 'prop-types';
import {
  Alert, Button,
} from 'react-bootstrap';

const Mission = (props) => {
  const { name, description } = props;

  return (
    <tr>
      <td>
        <h4>{name}</h4>
      </td>
      <td className="w-50">{description}</td>
      <td className="text-center align-middle">
        <Alert className="p-0 m-0 bg-extra-dark text-white" variant="dark">
          NOT A MEMBER
        </Alert>
      </td>
      <td className="text-center align-middle">
        <Button variant="outline-dark">Join MISSION</Button>
      </td>
    </tr>
  );
};

Mission.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Mission;
