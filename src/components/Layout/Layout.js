// -- React and related libs
import React, { useState } from "react";
import { connect, useSelector, useDispatch } from "react-redux";
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
import CorpList from "../../pages/dashboard/components/CorpList";
// -- Component Styles
import s from "./Layout.module.scss";

const Layout = (props) => {

  // modal
const [listIsShown, setListIsShown] = useState(false);
// const [industryName, setIndustryName] = useState("");

const openListHandler = () => {
  setListIsShown(true);
}

const closeListHandler = () => {
  console.log('close');
  setListIsShown(false);
}

  console.log(props.dispatch);

  const { industryName } = useSelector(state => state.industry)
  console.log(industryName);

  return (
    <div className={s.root}>
      {listIsShown && <CorpList onClose={closeListHandler} />}
      <div className={s.wrap}>
        <Header />
        <Sidebar />
        <main className={s.content}>
          <Breadcrumbs industryName={industryName} />
          {/* <Breadcrumbs url={props.industryName} />? */}
          <Switch>
            {/* <Route path="/template" exact render={() => <Redirect to="template/dashboard"/>} /> */}

            <Route path="/template/dashboard" exact component={Dashboard} onOpen={openListHandler}/>
            <Route 
              path="/template/dashboard/it" 
              render={() => <Dashboard industryName="IT정보통신업" onOpen={openListHandler}/>}
        
            />
            <Route 
              path="/template/dashboard/economy"
              render={() => <Dashboard industryName="금융업" onOpen={openListHandler}/>}
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
