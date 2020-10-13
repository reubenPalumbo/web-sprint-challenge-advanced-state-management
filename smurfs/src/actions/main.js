import axios from "axios";

export const ADD_SMURF_START = "ADD_SMURF_START";
export const ADD_SMURF_SUCCESS = "ADD_SMURF_SUCCESS";
export const ADD_SMURF_FAILURE = "ADD_SMURF_FAILURE";
export const GET_SMURF_START = "GET_SMURF_START";
export const GET_SMURF_SUCCESS = "GET_SMURF_SUCCESS";
export const GET_SMURF_FAILURE = "GET_SMURF_FAILURE";

export const addSmurf = (data) => (dispatch) => {
  dispatch({ type: ADD_SMURF_START });

  axios
    .post("http://localhost:3333/smurfs", data)
    .then((res) => dispatch({ type: ADD_SMURF_SUCCESS, payload: res.data }))
    .catch((err) => dispatch({ type: ADD_SMURF_FAILURE, payload: err }));
};

export const getSmurf = () => (dispatch) => {
  dispatch({ type: GET_SMURF_START });

  axios
    .get("http://localhost:3333/smurfs")
    .then((res) => dispatch({ type: GET_SMURF_SUCCESS, payload: res.data }))
    .catch((err) => dispatch({ type: GET_SMURF_FAILURE, payload: err }));
};
