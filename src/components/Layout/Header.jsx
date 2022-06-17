import React from 'react'

import classes from "./Header.module.css";

const Header = () => {
    

  return (
    <>
        <div className={classes.header}>
          <div className={classes.header__inner}>
            <div className={classes.header__industry}>
                <p>산업군이름</p>
            </div>
            <div className={classes.header__auth}>
                <p>Login</p>
            </div>
          </div>
        </div>
    </>
  )
}

export default Header