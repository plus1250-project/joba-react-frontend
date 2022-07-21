import React from "react";

import Widget from "../../../components/Widget/Widget.js";
import Statefulbubble from "./StatefullBubble";

import s from "../../tables/Tables.module.scss"


const KeywordBubbleChart = (props) => {

  return (
    <Widget>
        <div className={s.tableTitle}>
            <div className="headline-2">산업군 트렌드</div>
        </div>
        <div className={s.widgetContentBlock}>
          <Statefulbubble 
            industryName={props.industryName} 
            onChangeChart={props.onChangeChart}
            />
        </div>
    </Widget>
  )
}

export default KeywordBubbleChart