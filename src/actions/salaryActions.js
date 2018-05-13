import axios from 'axios';
import _ from 'lodash';
import { FETCH_TEAMS, FETCH_SALARIES, SET_FILTER, FETCH_POSITIONS } from '../action_types/salaryTypes';

const BASE_API = 'http://vast-falls-69803.herokuapp.com/'

const fetchSalaries = (filterType, query = '') => (dispatch) => {
  const axiosInstance = axios.create({
    baseURL: BASE_API,
    timeout: 8000,
    responseType: 'json',
    headers: { 'Content-Type': 'application/json' }
  });

  const queryType = 
  axiosInstance.get(`/${filterType}s/salary/?${filterType}=${query}`)
    .then((res) => {
      console.log(res);
      dispatch({
        type: FETCH_SALARIES,
        payload: _.sortBy(res.data, (data) => data.value_in_dollars)
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

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

export { fetchTeams, setFilter, fetchPositions, fetchSalaries };
