import axios from "axios";
import { createAction } from "redux-action";

let ep = "https://randomuser.me";

export const isLoading = createAction("QNA_LOADING");

export const getUserDetailsSuccess = createAction("FETCH_USER_SUCCESS");

export const userSelected = createAction("SELECT_USER");

export const getUserDetailsRequest = payload => {
  return dispatch => {
    dispatch(isLoading(true));
    axios
      .get(`${ep}/api/?page=${payload.pageNo}&results=15&seed=randomuser`)
      .then(response => {
        if (response.data) {
          dispatch(getUserDetailsSuccess(response.data.results));
        }
        dispatch(isLoading(false));
      })
      .catch(error => {
        //Do something
        dispatch(isLoading(false));
      });
  };
};

export const selectUser = payload => {
  return dispatch => {
    dispatch(userSelected(payload));
  };
};
