import React, { Component } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
// import { Provider } from "react-redux";
// import { store } from "../store";

import HomeContainer from "../modules/home/containers/HomeContainer";

class App extends Component {
  render() {
    return (
    //   <Provider>
          <Switch>
            <Route path="/" component={HomeContainer} />
          </Switch>
    //   </Provider>
    );
  }
}

export default withRouter(App);
