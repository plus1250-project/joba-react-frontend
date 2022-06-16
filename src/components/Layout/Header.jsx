import React from 'react'

import classes from "./Header.module.css";

const Header = () => {
    

  return (
    <>
        <div id={classes.header}>
            <div className={classes.logo}>
                <p>JOBA!</p>
            </div>
            <div className={classes.login}>
                <p>Login</p>
            </div>
        </div>
    </>
  )
}

export default Header