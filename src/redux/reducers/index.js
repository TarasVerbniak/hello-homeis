import { Actions } from "../actions/constants";

const initState = {
  guideList: [],
  guide: null,
  showSpinner: false
};

export default function(state = initState, action) {
  const { type, data } = action;

  switch (type) {
    case Actions.SET_GUIDE_LIST:
      return { ...state, guideList: data };
    case Actions.SET_SINGLE_GUIDE:
      return { ...state, guide: data };
    case Actions.TOGGLE_SPINNER:
      return { ...state, showSpinner: !state.showSpinner };
    default:
      return state;
  }
}
