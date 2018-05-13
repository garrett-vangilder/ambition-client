import { FETCH_TEAMS, SET_FILTER, FETCH_POSITIONS, FETCH_SALARIES } from '../action_types/salaryTypes'

const INITIAL_STATE = {
  teams: [],
  positions: [],
  salaries: [],
  data: null
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_TEAMS:
      return {
        ...state,
        teams: action.payload
      }

    case FETCH_SALARIES:
      return {
        ...state,
        salaries: action.payload
      }

    case FETCH_POSITIONS:
      return {
        ...state,
        positions: action.payload
      }

      case SET_FILTER:
        return {
          ...state,
          filterType: action.payload
        }
      
    default:
      return state;
  }
}