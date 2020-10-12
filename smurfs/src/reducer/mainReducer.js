import {
  ADD_SMURF,
  GET_SMURF_START,
  GET_SMURF_SUCCESS,
  GET_SMURF_FAILURE,
} from "../actions/main";

const initialState = {
  smurfs: [
    {
      name: "TEMP",
      age: "25",
      height: "25cm",
      id: "2",
    },
  ],
  isFetching: false,
  error: "",
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_SMURF:
      return {
        ...state,
        name: action.payload,
      };
    case GET_SMURF_START:
      return {
        ...state,
        isFetching: true,
        error: "",
      };
    case GET_SMURF_SUCCESS:
      return {
        ...state,

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
