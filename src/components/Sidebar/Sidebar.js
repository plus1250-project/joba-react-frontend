import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button} from 'reactstrap';
import { Link, withRouter } from 'react-router-dom';
import s from "./Sidebar.module.scss";
import l from "./LinksGroup/LinksGroup.module.scss"
import LinksGroup from "./LinksGroup/LinksGroup.js";
import { changeActiveSidebarItem } from "../../actions/navigation.js";
import SofiaLogo from "../Icons/SofiaLogo.js";
import cn from "classnames";

import SidebarItem from './SidebarItem';

const Sidebar = (props) => {

  const {
    activeItem = '',
    ...restProps
  } = props;

  const [burgerSidebarOpen, setBurgerSidebarOpen] = useState(false);
  const [industryName, setIndustryName] = useState(false);
  const [articlesList, setArticlesList] = useState([]);

  const onIndustryNameHandler = (event) => {
    setIndustryName(false)
  }

  

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
        <LinksGroup
          onActiveSidebarItemChange={activeItem => props.dispatch(changeActiveSidebarItem(activeItem))}
          activeItem={props.activeItem}
          header="Dashboard"
          isHeader
          iconName={<i className={'eva eva-home-outline'}/>}
          link="/template/dashboard"
          index="dashboard"
          badge="9"
        />
        <h5 className={s.navTitle}>산업군</h5>
      
        <Link to={{
          pathname: "/templete",
          state: {
            industryName:"IT"
          }
        }}/>
        {/* <SidebarItem name="IT" /> */}
        <SidebarItem name="IT"/>
        <SidebarItem name="교육업" />
        <SidebarItem name="건설업" /> 

        <LinksGroup
          onActiveSidebarItemChange={activeItem => props.dispatch(changeActiveSidebarItem(activeItem))}
          activeItem={props.activeItem}
          header="IT통신"
          isHeader
          iconName={<i className={'eva eva-text-outline'}/>}
          link="/template/typography"
          index="IT"
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
