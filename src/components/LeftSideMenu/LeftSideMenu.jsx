import React, { useState } from 'react';
import style from "./LeftSideMenu.module.css"

import firstBattleOption from "../../assets/firstBattleOption.png"
import secondBattleOption from "../../assets/secondBattleOption.png";
import thirdBattleOption from "../../assets/thirdBattleOption.png";
import fourthBattleOption from "../../assets/fourthBattleOption.png";
import fifthBattleOption from "../../assets/fifthBattleOption.png";

import watchIcon from "../../assets/watchIcon.png";
import newsIcon from "../../assets/newsIcon.png";

import { IoMdHelpCircle } from "react-icons/io";
import { CiPower } from "react-icons/ci";

const LeftSideMenu = () => {
  const [activeOption, setActiveOption] = useState(null);

  const newStyle = { filter: 'brightness(1)', transition: 'all ease-in 0.2s' };

  return <div className={style.container}>
    <div className={style.optionBox}>
      <div className={style.option}>
        <img src={firstBattleOption} alt={"option"}
          id='firstBattleOption'
          style={activeOption === 1 ? newStyle : {}}
          onMouseEnter={() => setActiveOption(1)}
          onMouseLeave={() => setActiveOption(null)} />
      </div>
      <div className={style.option}>
        <img src={secondBattleOption} alt={"option"}
          style={activeOption === 2 ? newStyle : {}}
          onMouseEnter={() => setActiveOption(2)}
          onMouseLeave={() => setActiveOption(null)} />
      </div>
      <div className={style.option}>
        <img src={thirdBattleOption} alt={"option"}
          style={activeOption === 3 ? newStyle : {}}
          onMouseEnter={() => setActiveOption(3)}
          onMouseLeave={() => setActiveOption(null)} />
      </div>
      <div className={style.option}>
        <img src={fourthBattleOption} alt={"option"}
          style={activeOption === 4 ? newStyle : {}}
          onMouseEnter={() => setActiveOption(4)}
          onMouseLeave={() => setActiveOption(null)} />
      </div>
      <div className={style.option}>
        <img src={fifthBattleOption} alt={"option"}
          style={activeOption === 5 ? newStyle : {}}
          onMouseEnter={() => setActiveOption(5)}
          onMouseLeave={() => setActiveOption(null)} />
      </div>
      <div className={style.option}>
        <img src={watchIcon} alt={"option"}
          style={activeOption === 6 ? newStyle : {}}
          onMouseEnter={() => setActiveOption(6)}
          onMouseLeave={() => setActiveOption(null)} />
      </div>
      <div className={style.option}>
        <img src={newsIcon} alt={"option"}
          style={activeOption === 7 ? newStyle : {}}
          onMouseEnter={() => setActiveOption(7)}
          onMouseLeave={() => setActiveOption(null)} />
      </div>
    </div>
    <div className={style.optionBox}>
      <div className={style.option}><IoMdHelpCircle /></div>
      <div className={style.option}><CiPower /></div>
    </div>
  </div>
}

export default LeftSideMenu