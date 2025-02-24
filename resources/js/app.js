import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import Routes from "./routes";
import store from "./store";
import * as action from "./store/actions";
import App from "../js/test";
store.dispatch(action.authCheck());

ReactDOM.render(
    // <Provider store={store}>
    //     <Router>
    //         <Switch>
    //             <Routes />
    //         </Switch>
    //     </Router>
    // </Provider>,

    <App />,
    document.getElementById("app")
);
