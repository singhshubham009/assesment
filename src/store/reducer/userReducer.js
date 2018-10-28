import { handleActions } from "redux-actions";

const initialState = {
  results: [],
  offset: 1,
  selectedUserUUID: null,
  loading: false
};

const UserReducer = handleActions(
  {
    FETCH_USER_SUCCESS: (state, action) => {
      let newResults = state.results.slice();
      action.payload.map(user => {
        newResults.push(user);
      });
      return {
        ...state,
        results: newResults
      };
    },
    SELECT_USER: (state, action) => {
      return {
        ...state,
        selectedUserUUID: action.payload
      };
    },
    ON_LOADING_TRIGGER: (state, action) => {
      return {
        ...state,
        loading: action.payload
      };
    }
  },
  initialState
);

export default UserReducer;
