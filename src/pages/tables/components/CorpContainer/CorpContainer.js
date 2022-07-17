import React from 'react'

import s from "../ArticleContainer/ArticleContainer.module.scss";
import cx from "classnames";
const CorpContainer = (props) => {
  console.log(props.corps);
  return (
      // 시가총액 추가해야 함
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
          <div className={s.time}>N% 성장</div>
        
        </li>
      ))}
    </ul>
  )
}

export default CorpContainer