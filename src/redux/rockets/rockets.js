import axios from 'axios';

import * as Camel from '../modules/camelConverter';

// Action types
const FETCH_ROCKETS_REQUEST = 'FETCH_ROCKETS_REQUEST';
const FETCH_ROCKETS_SUCCESS = 'FETCH_ROCKETS_SUCCESS';
const FETCH_ROCKETS_FAILURE = 'FETCH_ROCKETS_FAILURE';

// Initial state
const initialState = {
  loading: false,
  rockets: [],
  error: '',
};

// Action creators
export const fetchRocketsRequest = () => ({
  type: FETCH_ROCKETS_REQUEST,
});

export const fetchRocketsSuccess = (rockets) => ({
  type: FETCH_ROCKETS_SUCCESS,
  payload: rockets,
});

export const fetchRocketsFailure = (error) => ({
  type: FETCH_ROCKETS_FAILURE,
  payload: error,
});

// Fetch rockets function
export const fetchRockets = () => (dispatch) => {
  dispatch(fetchRocketsRequest());
  axios.get('https://api.spacexdata.com/v3/rockets')

    .then((response) => {
      // response.data is the rockets
      const rockets = Camel.keysToCamel(response.data).map((key) => {
        const {
          id, rocketName, description,
        } = key;
        const flickrImage = key.flickrImages[0];
        const rocket = {
          id, rocketName, description, flickrImage,
        };
        return rocket;
      });

      dispatch(fetchRocketsSuccess(rockets));
    })
    .catch((error) => {
      // error.message is the error message
      dispatch(fetchRocketsFailure(error.message));
    });
};

const rocketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ROCKETS_REQUEST:

      return {
        ...state,
        loading: true,
      };

    case FETCH_ROCKETS_SUCCESS:

      return {
        loading: false,
        rockets: action.payload,
        error: '',
      };

    case FETCH_ROCKETS_FAILURE:

      return {
        loading: false,
        rockets: [],
        error: action.payload,
      };

    default: return state;
  }
};

export default rocketsReducer;
