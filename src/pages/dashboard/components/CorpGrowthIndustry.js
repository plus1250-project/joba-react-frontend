import React, { useEffect, useState } from 'react'
import Widget from '../../../components/Widget/Widget'

import s from "../../tables/Tables.module.scss"
import heartTeal from "../../../assets/dashboard/heartTeal.svg";



const CorpGrowthIndustry = () => {


  const bigIndustList = ['기업1', '기업2', '기업3', '기업4', '기업5']

  const [varA, setVarA] = useState(0);
  const [bigIndust, setBigIndust] = useState("");
  let numberlist = 0;

  useEffect(() => {
    const timeout = setTimeout(() => setVarA(varA + 1), 2000);
    return () => clearTimeout(timeout);
  }, [varA]);

  // const timefunction = () => {
  //   if (numberlist >= bigIndustList.length) {
  //     numberlist = 0;
  //   } else {
  //     setBigIndust(bigIndustList[numberlist]);
  //     numberlist += 1;
  //   }
  // }


  useEffect(() => {
    const timeout = setTimeout(() => {
      if (numberlist >= bigIndustList.length) {
        numberlist = 0;
      } else {
        setBigIndust(bigIndustList[numberlist]);
        numberlist += 1;
      }
    }, 2000);
    return () => clearTimeout(timeout);
  }, [bigIndust]);



  return (
    <Widget className="widget-p-sm">
      <div className={s.smallWidget}>
        <div className="d-flex mb-4">
          <img className="py-1 ml-2 mr-2 mt-4 img-fluid" src={heartTeal} alt="..." style={{ width: "15%" }} />
          <div className="d-flex flex-column">
            <p className="headline-2 mt-2 ml-4">우량 기업 리스트</p>
            <p className="headline-1 ml-4 mt-2">{bigIndust}</p>
          </div>
        </div>
        <div>
        </div>
      </div>
    </Widget>
  )
}

export default CorpGrowthIndustry