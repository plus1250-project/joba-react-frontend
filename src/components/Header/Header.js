import PropTypes from "prop-types";
import React, { useState , useEffect} from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import jwt from 'jwt-decode';
import {
  Dropdown, DropdownMenu, DropdownToggle, Nav, Navbar, NavItem,
  NavLink
} from "reactstrap";

import { logoutUser } from "../../actions/auth";
import { closeSidebar, openSidebar } from "../../actions/navigation";
import MenuIcon from "../Icons/HeaderIcons/MenuIcon";
import SearchIcon from "../Icons/HeaderIcons/SearchIcon";


import logoutIcon from "../../assets/navbarMenus/pfofileIcons/logoutOutlined.svg";

import "animate.css";
import s from "./Header.module.scss";
import axios from "axios";


const Header = (props) => {
  
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [memberInfo, setMemberInfo] = useState([]);

  const toggleNotifications = () => {
    setNotificationsOpen(!notificationsOpen);
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

  let email = jwt(localStorage.getItem('bearerToken')).sub
  
  const BASEURL = 'http://localhost:3000/';
  useEffect(() => {
    axios({
      method: "post",
      url: BASEURL + "member/info",
      data: {
        email: email,
      }
    })
      .then(response => {
        setMemberInfo(response.data);
        // memberInfo = response.data;
      })
      .catch((error)=>{
        console.log(error);
      })
  },[email])


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
      <Nav className="ml-auto">
        <NavItem className="d-sm-none mr-4">
          <NavLink
            className=""
            href="#"
          >
            <SearchIcon />
          </NavLink>
        </NavItem>
        <Dropdown isOpen={notificationsOpen} toggle={() => toggleNotifications()} nav id="basic-nav-dropdown" className="ml-3 mr-3">
          <DropdownToggle nav caret className="navbar-dropdown-toggle">
            {/* 닉네임 받아오기 */}
            <span className="small d-none d-sm-block ml-1 mr-2 body-1">{memberInfo.nickName}</span>
          </DropdownToggle>

          {/* 마이페이지 (드롭다운) */}
          <DropdownMenu className="navbar-dropdown profile-dropdown" style={{ width: "flex", height: "flex", margin :"10px 200px 0  0"  }}>

            <div className={s.dropdownProfileItem}>
              <h6>My page</h6></div>
            <hr />
            <NavItem>
              <span className={s.emailname} >email</span>
            </NavItem>
            <NavItem>
              {/* 이메일 받아오기 */}
              <span className={s.emailAccount}>{memberInfo.email}</span>
            </NavItem>
            <hr />
             {/* 닉네임 변경*/}
             <NavItem>
              <span className={s.password} >nickname</span>
            </NavItem>
             <NavItem>
              <NavLink href="#/resetnickname">
                <button className="btn btn-primary mx-auto pwChange-btn" type="submit" ><img src={logoutIcon} alt="Logout" /><span className="ml-2 mr-2">닉네임 변경</span></button>
              </NavLink>
            </NavItem>
            <hr />
            {/* 비밀번호 변경  */}
            <NavItem>
              <span className={s.password} >password</span>
            </NavItem>
            <NavItem>
              <NavLink href="#/resetpw">
                <button className="btn btn-primary mx-auto pwChange-btn" type="submit" ><img src={logoutIcon} alt="Logout" /><span className="">비밀번호 변경</span></button>
              </NavLink>
            </NavItem>
            <hr />
           
            {/* 로그아웃 버튼 */}
            <NavItem>
              <NavLink onClick={() => doLogout()} href="#">
                <button className="btn btn-primary mx-auto log-btn" type="submit" style={{}}><img src={logoutIcon} alt="Logout" /><span className="ml-3 mr-3">로그아웃</span></button>
              </NavLink>
            </NavItem>
            {/* 회원탈퇴 버튼 */}
            <hr/>
            <NavItem>
              <NavLink href="#/deleteaccount">
                계정 삭제
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