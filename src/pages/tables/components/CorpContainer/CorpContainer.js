import React from 'react'

import s from "../ArticleContainer/ArticleContainer.module.scss";
import cx from "classnames";
const CorpContainer = (props) => {
  console.log(props.corps);
  return (
    <ul>
      {props.corps.map((corp) => (
        <li
          className={cx(`${s.taskBlock}`, { [s.completed]: false })}
          key={corp.id}
        >
          <div className={s.taskDescription}>
            <div className={s.time}>{corp.corpRank}</div>
            <div
              className="checkbox checkbox-primary mr-1">
              {corp.corpName}
            </div>
            <div className="body-3"></div>
          </div>
          <div>
            <div className={s.growthRate}>{corp.growthRate}%&nbsp;&nbsp;&nbsp;
            <div className={s.growth}>성장</div>
            </div>
          </div>




        </li>
      ))}
    </ul>
  )
}

export default CorpContainer