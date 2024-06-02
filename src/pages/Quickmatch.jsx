import React from 'react';
import style from "./Quickmatch.module.css";

import LeftSideMenu from '../components/LeftSideMenu/LeftSideMenu';
import MainMenu from '../components/MainMenu/MainMenu';
import RightSideMenu from '../components/RightSideMenu/RightSideMenu';

const Quickmatch = () => {
    return <div className={style.mainContainer}>
        <LeftSideMenu />
        <MainMenu />
        <RightSideMenu />
    </div>
}

export default Quickmatch