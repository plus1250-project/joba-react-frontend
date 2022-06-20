import React, {useState} from 'react';


import classes from './CorpIndustry.module.css';



const CorpIndustry = (props) => {


  return (
    // App.js 에서 
    <div className={classes.main__header__corp} onClick={props.onOpen}>
      <div className={classes.main__header__corp__inner}>
        CorpIndustry
      </div>
    </div>
      
  )
}

export default CorpIndustry