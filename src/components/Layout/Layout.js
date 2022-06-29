// -- React and related libs
import React from "react";
import { connect } from "react-redux";
import { Switch, Route, withRouter, Redirect } from "react-router";

// -- Third Party Libs
import PropTypes from "prop-types";

// -- Custom Components
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import Footer from "../Footer/Footer";
import Breadcrumbs from "../Breadbrumbs/Breadcrumbs";
import Dashboard from "../../pages/dashboard/Dashboard";
import Notifications from "../../pages/notifications/Notifications"

// -- Component Styles
import s from "./Layout.module.scss";

const Layout = (props) => {

  console.log(props.dispatch);

  return (
    <div className={s.root}>
      <div className={s.wrap}>
        <Header />
        <Sidebar />
        <main className={s.content}>
          <Breadcrumbs url={props.location.pathname} />
          {/* <Breadcrumbs url={props.industryName} />? */}
          <Switch>
            {/* <Route path="/template" exact render={() => <Redirect to="template/dashboard"/>} /> */}

            <Route path="/template/dashboard" exact component={Dashboard}/>
            <Route 
              path="/template/dashboard/it" 
              render={() => <Dashboard industryName={"IT"}/>}
        
            />
            <Route 
              path="/template/dashboard/economy"
              render={() => <Dashboard industryName={"경제"} />}
              />
            <Route path="/template/notifications" exact component={Notifications} />
            <Route path='*' exact render={() => <Redirect to="/error" />} />
          </Switch>
        </main>
        <Footer />
      </div>
    </div>
  );
}

Layout.propTypes = {
  sidebarOpened: PropTypes.bool,
  dispatch: PropTypes.func.isRequired,
}

function mapStateToProps(store) {
  return {
    sidebarOpened: store.navigation.sidebarOpened,
  };
}

export default withRouter(connect(mapStateToProps)(Layout));
