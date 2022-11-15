import React from "react";
import PropTypes from "prop-types";
import { NavLink, withRouter } from "react-router-dom";

import s from "./LinksGroup.module.scss";


const LinksGroup = (props) => {

  const {
    link = "",
    header = "",
    isHeader = false,
    classname = "",
    exact = true,
  } = props;

  if (!props.childrenLinks) {
    if (props.isHeader) {

      return (
        <li className={[s.headerLink, props.className].join(" ")}>
          <NavLink
            to={props.link}
            activeClassName={s.headerLinkActive}
            exact={exact}
            target={props.target}
          >
            {props.header}
            {props.label && <sup className={`text-${props.labelColor || 'warning'}`}>{props.label}</sup> }        
          </NavLink>
        </li>
      );
    }
      return (
        <li>
          <NavLink
            to={props.link}
            activeClassName={s.headerLinkActive}
            onClick={(e) => {
              if (props.link.includes('menu')) {
                e.preventDefault();
              }
            }}
            exact={exact}
          >
            {<i className="fa fa-circle text-primary mr-2"/>} {props.header}
          </NavLink>
        </li>
      );
    }
  }
 
LinksGroup.propTypes = {
  header: PropTypes.node.isRequired,
  link: PropTypes.string.isRequired,
  childrenLinks: PropTypes.array,
  iconName: PropTypes.object,
  className: PropTypes.string,
  badge: PropTypes.string,
  label: PropTypes.string,
  activeItem: PropTypes.string,
  isHeader: PropTypes.bool,
  index: PropTypes.string,
  deep: PropTypes.number,
  onActiveSidebarItemChange: PropTypes.func,
  labelColor: PropTypes.string,
  exact: PropTypes.bool,
}

export default withRouter(LinksGroup);
