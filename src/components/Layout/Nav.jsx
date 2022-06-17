import React from 'react'

import classes from "./Nav.module.css";

const Nav = () => {
  return (
    <div className={classes.nav}>
      <div className={classes.nav__inner}>
        {/* JOBA! logo */}
        <div className={classes.nav__logo}>
          <div className={classes.nav__logo__name}>
            <span className={classes.nav__logo__left}>JOB</span>
            <span className={classes.nav__logo__right}>A!</span>
          </div>
        </div>
        {/* Industry logo */}
        <div className={classes.nav__title}>
          <div className={classes.nav__title__name}>
            <span className={classes.nav__title__left}>산업</span>
            <span className={classes.nav__title__right}>별 트렌드</span>
          </div>
        </div>
        
        <ul className={classes.nav__list}>
          <li className={classes.nav__item}>서비스업</li>
          <li className={classes.nav__item}>교육업</li>
          <li className={classes.nav__item}>은행금융업</li>
          <li className={classes.nav__item}>IT웹,통신</li>
          <li className={classes.nav__item}>판매유통</li>
          <li className={classes.nav__item}>제조화학</li>
          <li className={classes.nav__item}>건설업</li>
          <li className={classes.nav__item}>의료,제약,복지</li>
          <li className={classes.nav__item}>미디어,디자인</li>
          <li className={classes.nav__item}>기관,협회</li>
        </ul>

      </div>
    
    </div>
  )
}

export default Nav