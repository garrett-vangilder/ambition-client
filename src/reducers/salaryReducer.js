import { FETCH_TEAMS } from '../action_types/salaryTypes'

const INITIAL_STATE = {
  teams: [],
  data: null
};

export default function (state = INITIAL_STATE, action) {
  console.log('switch go', action)
  switch (action.type) {
    case FETCH_TEAMS:
      return {
        ...state,
        teams: action.payload
      }
    default:
      return state;
  }
}