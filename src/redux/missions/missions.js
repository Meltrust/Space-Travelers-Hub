import axios from 'axios';

import * as Camel from '../modules/camelConverter';

const FETCH_DATA = 'FETCH_MISSIONS_DATA';

const initialState = [];

export const fetchData = () => async (dispatch) => {
  const response = await axios.get('https://api.spacexdata.com/v3/missions');
  const payload = Camel.keysToCamel(response.data).map((e) => {
    const { missionId, missionName, description } = e;
    const element = { missionId, missionName, description };
    return element;
  });
  dispatch({
    type: FETCH_DATA,
    payload,
  });
};

const missionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return action.payload;
    default:
      return state;
  }
};

export default missionsReducer;
