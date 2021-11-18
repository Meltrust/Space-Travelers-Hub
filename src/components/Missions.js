import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from '../redux/missions/missions';

const Missions = () => {
  const missionList = useSelector((state) => state.missionsReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    if (missionList.length === 0) {
      dispatch(fetchData());
    }
  }, []);

  return (
    <h2>Missions Page</h2>
  );
};

export default Missions;
