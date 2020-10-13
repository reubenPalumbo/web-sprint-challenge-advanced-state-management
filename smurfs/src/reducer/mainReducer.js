import {
  GET_SMURF_START,
  GET_SMURF_SUCCESS,
  GET_SMURF_FAILURE,
} from "../actions/main";

const initialState = {
  smurfs: [],
  isFetching: false,
  error: "",
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_SMURF_START:
      return {
        ...state,
        isFetching: true,
        error: "",
      };
    case GET_SMURF_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        isFetching: false,
        error: "",
      };
    case GET_SMURF_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    default:
      return state;
  }
}

export default reducer;
