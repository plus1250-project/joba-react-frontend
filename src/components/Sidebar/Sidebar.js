import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import PropTypes from 'prop-types';
import LinksGroup from "./LinksGroup/LinksGroup.js";
import SofiaLogo from "../Icons/SofiaLogo.js";

import s from "./Sidebar.module.scss";
import cn from "classnames";


const Sidebar = (props) => {

  const {
    activeItem = '',
    ...restProps
  } = props;

  const [burgerSidebarOpen, setBurgerSidebarOpen] = useState(false);

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

        <h3 className={s.navTitle}>산업군</h3>
  
        <LinksGroup          
          activeItem={props.activeItem}
          header="IT정보통신업"
          isHeader
          iconName={<i className={'eva eva-text-outline'}/>}
          link="/template/dashboard/it"          
        />
        <LinksGroup      
          header="금융업"
          isHeader
          iconName={<i className={'eva eva-text-outline'}/>}
          link="/template/dashboard/economy"          
        />
        <LinksGroup
          header="건설업"
          isHeader
          iconName={<i className={'eva eva-text-outline'}/>}
          link="/template/dashboard/construct"          
        />
        <LinksGroup
          header="화학제약"
          isHeader
          iconName={<i className={'eva eva-text-outline'}/>}
          link="/template/dashboard/chemical"          
        />
        <LinksGroup
          header="음식료업"
          isHeader
          iconName={<i className={'eva eva-text-outline'}/>}
          link="/template/dashboard/food"          
        />
        <LinksGroup
          header="기계장비"
          isHeader
          iconName={<i className={'eva eva-text-outline'}/>}
          link="/template/dashboard/mechanic"          
        />
        <LinksGroup
          header="판매유통"
          isHeader
          iconName={<i className={'eva eva-text-outline'}/>}
          link="/template/dashboard/retail"
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