import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
// Store is what is subscribed to under the hood
import store from "./store";

// Import pages
import LoginExample from "./components/LoginExample";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Route exact path="/" component={LoginExample} />
            <div className="container-fluid" style={{ margin: 0, padding: 0 }}>
              {/* This is how I link to other pages.
              I believe holding these in a div is just convention, but I am not sure.
              <Route exact path="/profiles" component={Profiles} />
              <Route exact path="/not-found" component={NotFound} />
            */}
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
