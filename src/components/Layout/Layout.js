// -- React and related libs
import React, { useState } from "react";
import { connect, useSelector } from "react-redux";
import { Switch, Route, withRouter, Redirect } from "react-router";

// -- Third Party Libs
import PropTypes from "prop-types";

// -- Custom Components
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import Footer from "../Footer/Footer";
import Dashboard from "../../pages/dashboard/Dashboard";
import CorpList from "../../pages/dashboard/components/CorpList";

// -- Component Styles
import s from "./Layout.module.scss";

const Layout = (props) => {

    // modal
  const [listIsShown, setListIsShown] = useState(false);

  const openListHandler = () => {
    setListIsShown(true);
  }

  const closeListHandler = () => {
    console.log('close');
    setListIsShown(false);
  }

  return (
    <div className={s.root}>
      {listIsShown && <CorpList onClose={closeListHandler} />}
      <div className={s.wrap}>
        <Header />
        <Sidebar />
        <main className={s.content}>
          <Switch>
            <Route path="/template/dashboard" exact component={Dashboard} onOpen={openListHandler}/>
            <Route 
              path="/template/dashboard/it" 
              render={() => <Dashboard industryName="IT정보통신업" onOpen={openListHandler}/>}        
            />
            <Route 
              path="/template/dashboard/economy"
              render={() => <Dashboard industryName="금융업" onOpen={openListHandler}/>}
              />
            <Route 
              path="/template/dashboard/construct"
              render={() => <Dashboard industryName="건설업" onOpen={openListHandler}/>}
              />
            <Route 
              path="/template/dashboard/chemical"
              render={() => <Dashboard industryName="화학제약" onOpen={openListHandler}/>}
              />
            <Route 
              path="/template/dashboard/food"
              render={() => <Dashboard industryName="음식료업" onOpen={openListHandler}/>}
              />
            <Route 
              path="/template/dashboard/mechanic"
              render={() => <Dashboard industryName="기계장비" onOpen={openListHandler}/>}
              />                                          
            <Route 
              path="/template/dashboard/retail"
              render={() => <Dashboard industryName="판매유통" onOpen={openListHandler}/>}
              />                                          
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
