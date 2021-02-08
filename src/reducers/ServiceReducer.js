const defaultState = {
  loading: false,
  googlePayload: [],
  bingPayload: [],
  error: null,
};

const serviceReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "LOADING": 
      return {
        ...state,
        loading: true,
      };
    case "GOOGLE_DATA":
      return {
        ...state,
        loading: false,
        googlePayload: action.payload,
      };
    case "BING_DATA":
      return {
        ...state,
        loading: false,
        bingPayload: action.payload,
      };
      case "ERROR":
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default serviceReducer;
