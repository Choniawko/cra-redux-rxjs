import actionCreators from "./actionCreators";
const initialState = {
  lists: []
};
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actionCreators.updateLists.type:
      return {
        ...state,
        lists: payload
      };
    default:
      return state;
  }
};
