import { FETCH_TEAMS, SET_FILTER, FETCH_POSITIONS } from '../action_types/salaryTypes'

const INITIAL_STATE = {
  teams: [],
  positions: [],
  data: null
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_TEAMS:
      return {
        ...state,
        teams: action.payload
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