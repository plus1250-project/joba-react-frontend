// -- React and related libs
import React from "react";
import { Switch, Route, Redirect } from "react-router";
import { HashRouter } from "react-router-dom";

// -- Redux
import { connect } from "react-redux";

// -- Custom Components
import LayoutComponent from "./components/Layout/Layout";
import ErrorPage from "./pages/error/ErrorPage";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import ResetPassword from "./pages/password/ResetPassword";
import FindPassword from "./pages/password/FindPassword";
import ResetNickname from "./pages/nickname/ResetNickname";
import DeleteAccount from "./pages/deleteAccount/DeleteAccount";


// -- Redux Actions
import { logoutUser } from "./actions/auth";

// -- Third Party Libs
import { ToastContainer } from "react-toastify";

// -- Services
import isAuthenticated from "./services/authService";

// -- Component Styles
import "./styles/app.scss";
import { Dashboard } from "@material-ui/icons";

const PrivateRoute = ({ dispatch, component, ...rest }) => {
  if (!isAuthenticated(JSON.parse(localStorage.getItem("authenticated")))) {
    dispatch(logoutUser());
    return (<Redirect to="/login" />)
  } else {
    return (
      <Route {...rest} render={props => (React.createElement(component, props))} />
    );
  }
};



const App = (props) => {
  return (
    <div>

      <ToastContainer />
      <HashRouter>
        <Switch>
          <Route path="/" exact render={() => <Redirect to="/template/dashboard/it" />} />
          <Route path="/template" exact render={() => <Redirect to="/template/dashboard/it" />} />
          <Route path="/template/dashboard" exact render={() => <Redirect to="/template/dashboard/it" />} />
          <PrivateRoute path="/template" dispatch={props.dispatch} component={LayoutComponent} />
          <Route path="/login" exact component={Login} />
          <Route path="/error" exact component={ErrorPage} />
          <Route path="/register" exact component={Register} />
          <Route path="/findpw" exact component={FindPassword} />
          {/* privateroute */}
          <Route path="/resetpw" exact component={ResetPassword} />
          <Route path="/resetnickname" exact component={ResetNickname} />
          <Route path="/deleteaccount" exact component={DeleteAccount} />
          <Route component={ErrorPage} />
          <Route path='*' exact={true} render={() => <Redirect to="/error" />} />
        </Switch>
      </HashRouter>
    </div>
  );
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(App);