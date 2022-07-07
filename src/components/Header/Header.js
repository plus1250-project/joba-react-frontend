import React, { useState } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router";
import { connect } from "react-redux";

import {
  Navbar,
  Nav,
  NavItem,
  NavLink,
  InputGroupAddon,
  InputGroup,
  Input,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Form,
  FormGroup,
} from "reactstrap";

import { logoutUser } from "../../actions/auth";
import { closeSidebar, openSidebar } from "../../actions/navigation";
import MenuIcon from "../Icons/HeaderIcons/MenuIcon";
import SearchBarIcon from "../Icons/HeaderIcons/SearchBarIcon";
import SearchIcon from "../Icons/HeaderIcons/SearchIcon";

import ProfileIcon from "../../assets/navbarMenus/pfofileIcons/ProfileIcon";
import MessagesIcon from "../../assets/navbarMenus/pfofileIcons/MessagesIcon";
import TasksIcon from "../../assets/navbarMenus/pfofileIcons/TasksIcon";

import logoutIcon from "../../assets/navbarMenus/pfofileIcons/logoutOutlined.svg";
import basketIcon from "../../assets/navbarMenus/basketIcon.svg";
import calendarIcon from "../../assets/navbarMenus/calendarIcon.svg";
import envelopeIcon from "../../assets/navbarMenus/envelopeIcon.svg";
import mariaImage from "../../assets/navbarMenus/mariaImage.jpg";
import notificationImage from "../../assets/navbarMenus/notificationImage.jpg";
import userImg from "../../assets/user.svg";

import s from "./Header.module.scss";
import "animate.css";
import { Height } from "@material-ui/icons";

const Header = (props) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  const toggleNotifications = () => {
    setNotificationsOpen(!notificationsOpen);
  }

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }

  const toggleSidebar = () => {
    if (props.sidebarOpened) {
      props.dispatch(closeSidebar());
    } else {
      const paths = props.location.pathname.split('/');
      paths.pop();
      props.dispatch(openSidebar());
    }
  }

  const doLogout = () => {
    props.dispatch(logoutUser());
  }

  return (
    <Navbar className={`${s.root} d-print-none`}>
      <div>
        <NavLink
          onClick={() => toggleSidebar()}
          className={`d-md-none mr-3 ${s.navItem}`}
          href="#"
        >
          <MenuIcon className={s.menuIcon} />
        </NavLink>
      </div>
      <Form className="d-none d-sm-block" inline>
        <FormGroup>
          <InputGroup className='input-group-no-border'>
            <Input id="search-input" placeholder="Search Dashboard" className='focus' />
            <InputGroupAddon addonType="prepend">
              <span>
                <SearchBarIcon />
              </span>
            </InputGroupAddon>
          </InputGroup>
        </FormGroup>
      </Form>
      <Nav className="ml-auto">
        <NavItem className="d-sm-none mr-4">
          <NavLink
            className=""
            href="#"
          >
            <SearchIcon />
          </NavLink>
        </NavItem>
        <Dropdown isOpen={notificationsOpen} toggle={() => toggleNotifications()} nav id="basic-nav-dropdown" className="ml-3">
          <DropdownToggle nav caret className="navbar-dropdown-toggle">
            {/* <span className={`${s.avatar} rounded-circle float-left mr-2`}> */}
            {/* <img src={userImg} alt="User"/> */}
            {/* <ProfileIcon /> */}
            {/* </span> */}

            {/* 나중에 props로 이메일 받아오기 */}
            <span className="small d-none d-sm-block ml-1 mr-2 body-1">plus1250@email.com</span>
          </DropdownToggle>
          
          {/* 마이페이지 (드롭다운) */}
          <DropdownMenu className="navbar-dropdown profile-dropdown" style={{ width: "200px", height: "345px" }}>
            <div className={s.dropdownProfileItem}>
              <h6>My page</h6></div>
            <hr />
            <NavItem>
              <span className={s.emailname} >email</span>
            </NavItem>
            <NavItem>
              <span className={s.emailAccount}>plus1250@email.com</span>
            </NavItem>
            <hr />
            <NavItem>
              <span className={s.password} >password</span>
            </NavItem>
            {/* 비밀번호 변경 버튼 */}
            <NavItem>
              {/* <NavLink onClick={() => null} href="/resetpw"> */}
              <NavLink href="#/resetpw">
                <button className="btn btn-primary mx-auto pwChange-btn" type="submit" ><img src={logoutIcon} alt="Logout" /><span className="ml-1">비밀번호 변경</span></button>
              </NavLink>
            </NavItem>
            <hr />
            {/* 로그아웃 버튼 */}
            <NavItem>
              <NavLink onClick={() => doLogout()} href="#">
                <button className="btn btn-primary mx-auto log-btn" type="submit" style={{}}><img src={logoutIcon} alt="Logout" /><span className="ml-1">로그아웃</span></button>
              </NavLink>
            </NavItem>

          </DropdownMenu>
        </Dropdown>
      </Nav>
    </Navbar>
  )
}

Header.propTypes = {
  dispatch: PropTypes.func.isRequired,
  sidebarOpened: PropTypes.bool,
}

function mapStateToProps(store) {
  return {
    sidebarOpened: store.navigation.sidebarOpened,
    sidebarStatic: store.navigation.sidebarStatic,
  };
}

export default withRouter(connect(mapStateToProps)(Header));

