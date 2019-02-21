import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const initialState = {};

const middleware = [thunk];

var getComposeEnhancers = () => {
  //THIS IS GREAT FOR DEBUGGING
  //ENABLE WE TOOLS WITH THIS LINE, BUT MUST HAVE TOOLS INSTALLED
  if (window.navigator.userAgent.includes("Chrome")) {
    return compose(
      applyMiddleware(...middleware),
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    );
  }

  return compose(applyMiddleware(...middleware));
};

const store = createStore(rootReducer, initialState, getComposeEnhancers());

export default store;
