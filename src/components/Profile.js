import React from 'react';
import { Container } from 'react-bootstrap';

import JoinedMissions from './JoinedMissions';

const Profile = () => (
  <Container className="d-flex">
    <JoinedMissions />
    <JoinedMissions />
  </Container>
);

export default Profile;
