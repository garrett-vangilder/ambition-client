import { FETCH_TEAMS, SET_FILTER, FETCH_POSITIONS, FETCH_SALARIES, SET_FILTER_DESCRIPTOR, IS_LOADING } from '../action_types/salaryTypes'

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
        salaries: action.payload,
        loading: false
      }

    case FETCH_POSITIONS:
      return {
        ...state,
        positions: action.payload
      }

      case SET_FILTER:
        return {
          ...state,
          filterType: action.payload,
          filterDescriptor: ''
        }
      
      case SET_FILTER_DESCRIPTOR:
        return {
          ...state,
          filterDescriptor: action.payload
        }

      case IS_LOADING:
        return {
          ...state,
          loading: true
        }
      
    default:
      return state;
  }
}