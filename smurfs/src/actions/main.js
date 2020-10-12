import axios from "axios";

export const ADD_SMURF = "ADD_SMURF";
export const GET_SMURF_START = "GET_SMURF_START";
export const GET_SMURF_SUCCESS = "GET_SMURF_SUCCESS";
export const GET_SMURF_FAILURE = "GET_SMURF_FAILURE";

export const addSmurf = (data) => {
  return {
    type: ADD_SMURF,
    payload: data,
  };
};

export const getSmurf = () => (dispatch) => {
  dispatch({ type: GET_SMURF_START });

  axios
    .get("http://localhost:3000/smurfs")
    .then((res) => dispatch({ type: GET_SMURF_SUCCESS, payload: res.data }))
    .catch((err) => dispatch({ type: GET_SMURF_FAILURE, payload: err }));
};
