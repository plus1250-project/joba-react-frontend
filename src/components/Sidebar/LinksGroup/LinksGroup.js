import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link, NavLink, withRouter } from "react-router-dom";


import s from "./LinksGroup.module.scss";


const LinksGroup = (props) => {

  const {
    link = "",
    childrenLinks = null,
    header = "",
    classname = "",
    isHeader = false,
    deep = 0,
    activeItem = "",
    label = "",
    exact = true
  } = props;

  const [headerLinkClicked, setHeaderLinkClicked] = useState(false);

  const isOpen = props.activeItem && props.activeItem.includes(props.index) && headerLinkClicked;

   console.log(props.target);
      return (
        <li className={[s.headerLink, props.className].join(" ")}>
          <NavLink
            to={props.link}
            activeClassName={s.headerLinkActive}
            exact={exact}
            // target={props.target}
          >
            {props.target}
            {props.header}
          </NavLink>
        </li>
        // <Layout industryName={props.header}/>
      );
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
