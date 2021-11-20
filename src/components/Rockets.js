import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Rocket from './Rocket';
import { fetchRockets } from '../redux/rockets/rockets';

export default function Rockets() {
  const dispatch = useDispatch();
  const rocketData = useSelector((state) => state.rocketsReducer);

  useEffect(() => {
    if (rocketData.rockets.length === 0) {
      dispatch(fetchRockets());
    }
  }, []);

  if (rocketData.loading) {
    return <h2>Loading</h2>;
  }
  if (rocketData.error) {
    return <h2>{rocketData.error}</h2>;
  }

  return (

    <div className="mb-5 col">
      {rocketData // conditional
           && rocketData.rockets // conditional
               && rocketData.rockets.map(
                 (rocket) => (
                   <Rocket
                     key={rocket.id}
                     id={rocket.id}
                     name={rocket.rocketName}
                     description={rocket.description}
                     flickrImage={rocket.flickrImage}
                     className="row"
                   />
                 ),
               )}
    </div>

  );
}
