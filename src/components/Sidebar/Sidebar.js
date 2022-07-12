import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button} from 'reactstrap';
import { Link, withRouter, useHistory } from 'react-router-dom';
import s from "./Sidebar.module.scss";
import l from "./LinksGroup/LinksGroup.module.scss"
import LinksGroup from "./LinksGroup/LinksGroup.js";
import { changeActiveSidebarItem, changeDashboard } from "../../actions/navigation.js";
import SofiaLogo from "../Icons/SofiaLogo.js";
import cn from "classnames";

import SidebarItem from './SidebarItem';

const Sidebar = (props) => {

  console.log(props.dispatch);
  const {
    activeItem = '',
    ...restProps
  } = props;

  const [burgerSidebarOpen, setBurgerSidebarOpen] = useState(false);
  // const [industryName, setIndustryName] = useState(false);
  const [articlesList, setArticlesList] = useState([]);

  // const onIndustryNameHandler = (event) => {
  //   setIndustryName(false)
  // }


  useEffect(() => {
    if (props.sidebarOpened) {
      setBurgerSidebarOpen(true)
    } else {
      setTimeout(() => {
        setBurgerSidebarOpen(false)
      }, 0);
    }
  }, [props.sidebarOpened])

  return (
    <nav className={cn(s.root, {[s.sidebarOpen]: burgerSidebarOpen})} >
      <header className={s.logo}>
        <SofiaLogo/>
        <span className={s.title}>JOBA Trend</span>
      </header>
      <ul className={s.nav}>
        {/* <LinksGroup
          onActiveSidebarItemChange={activeItem => props.dispatch(changeActiveSidebarItem(activeItem))}
          activeItem={props.activeItem}
          header="Dashboard"
          isHeader
          iconName={<i className={'eva eva-home-outline'}/>}
          link="/template/dashboard"
          index="dashboard"
          badge="9"
        /> */}
        <div>DASHBOARD</div>
        <h5 className={s.navTitle}>산업군</h5>
      
        {/* <Link to={{
          pathname: "/templete/dashboard",
          state: {
            industryName:"IT"
          }
        }}/> */}

        {/* <SidebarItem name="IT" /> */}
        {/* <button onClick={() => {
          props.dispatch(changeDashboard('IT'))
        }}>IT</button>
        <SidebarItem name="교육업" />
        <SidebarItem name="건설업" />  */}

        

        <LinksGroup
          onActiveSidebarItemChange={activeItem => props.dispatch(changeActiveSidebarItem(activeItem))}
          activeItem={props.activeItem}
          header="IT정보통신업"
          isHeader
          iconName={<i className={'eva eva-text-outline'}/>}
          link="/template/dashboard/it"
          index="IT정보통신업"
        />
        <LinksGroup
          onDashboardChange={industryName => props.dispatch(changeDashboard(industryName))}
          header="금융업"
          isHeader
          iconName={<i className={'eva eva-text-outline'}/>}
          link="/template/dashboard/economy"
          index="금융업"
        />
        
      </ul>
    </nav>
  );
}

Sidebar.propTypes = {
  sidebarOpened: PropTypes.bool,
  dispatch: PropTypes.func.isRequired,
  activeItem: PropTypes.string,
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
}

function mapStateToProps(store) {
  return {
    sidebarOpened: store.navigation.sidebarOpened,
    activeItem: store.navigation.activeItem,
  };
}

export default withRouter(connect(mapStateToProps)(Sidebar));
