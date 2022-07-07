import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link, NavLink, withRouter, useHistory } from "react-router-dom";
import { Collapse, Badge } from "reactstrap";


import s from "./LinksGroup.module.scss";
import { HistoryRounded } from "@material-ui/icons";


const LinksGroup = (props) => {

  // console.log(props.industryName);
  // console.log(props.link);
  
  const {
    link = "",
    childrenLinks = null,
    header = "",
    classname = "",
    isHeader = false,
    deep = 0,
    activeItem = "",
    label = "",
    exact = true,
  } = props;

  const [headerLinkClicked, setHeaderLinkClicked] = useState(false);

  const togglePanelCollapse = (link, e) => {
    props.onActiveSidebarItemChange(link);
    setHeaderLinkClicked(!headerLinkClicked );
    e.preventDefault();
  }

  const isOpen = props.activeItem && props.activeItem.includes(props.index) && headerLinkClicked;
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
            {/* <span className={s.icon}>
              {props.iconName}
            </span> */}
            {props.header}
            {props.label && <sup className={`text-${props.labelColor || 'warning'}`}>{props.label}</sup> }
            {/* {props.badge && <Badge className={s.badge} color="secondary-red" pill>{props.badge}</Badge>} */}
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
