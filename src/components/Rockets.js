import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

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
    <div>
      <h2>Rockets</h2>
      <div>
        {rocketData // conditional
           && rocketData.rockets // conditional
               && rocketData.rockets.map(
                 (rocket) => (
                   <div key={rocket.id}>
                     <p>{rocket.id}</p>
                     <p>{rocket.rocketName}</p>
                     <p>{rocket.description}</p>
                     <p>{rocket.flickrImage}</p>
                   </div>
                 ),
               )}
      </div>
    </div>

  );
}
