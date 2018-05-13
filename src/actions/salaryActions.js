import axios from 'axios';
import { FETCH_TEAMS, SET_FILTER, FETCH_POSITIONS } from '../action_types/salaryTypes';

const BASE_API = 'http://vast-falls-69803.herokuapp.com/'

const fetchTeams = () => (dispatch) => {
  const axiosInstance = axios.create({
    baseURL: BASE_API,
    timeout: 1000,
    responseType: 'json',
    headers: { 'Content-Type': 'application/json' }
  });
  axiosInstance.get(`/teams/`)
    .then((res) => {
      console.log(res);
      dispatch({
        type: FETCH_TEAMS,
        payload: res.data
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

const fetchPositions = () => (dispatch) => {
  const axiosInstance = axios.create({
    baseURL: BASE_API,
    timeout: 1000,
    responseType: 'json',
    headers: { 'Content-Type': 'application/json' }
  });
  axiosInstance.get(`/positions/`)
    .then((res) => {
      console.log(res);
      dispatch({
        type: FETCH_POSITIONS,
        payload: res.data
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

const setFilter = (filterType) => (dispatch) => {
  dispatch({ 
    type: SET_FILTER,
    payload: filterType
   });
}

export { fetchTeams, setFilter, fetchPositions };
