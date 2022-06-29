import React from 'react'

import s from "../ArticleContainer/ArticleContainer.module.scss";
import cx from "classnames";

const CorpContainer = (props) => {
  return (
    <ul>
      {props.corps.map((corp) => (
        <li
          className={cx(`${s.taskBlock}`, { [s.completed]: false })}
          key={corp.id}
        >
          <div className={s.taskDescription}>
            <div
              className="checkbox checkbox-primary mr-1">
              {corp.name}
            </div>
            <div className="body-3"></div>
          </div>
          <div className={s.time}>{corp.count}</div>
        </li>
      ))}
    </ul>
  )
}

export default CorpContainer