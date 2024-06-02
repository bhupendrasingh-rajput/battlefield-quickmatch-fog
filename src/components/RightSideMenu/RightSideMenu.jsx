import React, { useState } from 'react';
import style from "./RightSideMenu.module.css";

import { HiUserGroup } from "react-icons/hi";
import { BsRecord2Fill } from "react-icons/bs";
import { TbPlayerRecord } from "react-icons/tb";

import groupInvite from "../../assets/groupInvite.png"
import onlineInvite from "../../assets/onlineInvite.png"
import offlineInvite from "../../assets/offlineInvite.png"

const RightSideMenu = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const styles = !isMenuActive ? { display: "none" } : {};

  return (
    <div className={style.container}>
      <div className={style.inviteContainer} onMouseEnter={() => setIsMenuActive(true)} onMouseLeave={() => setIsMenuActive(false)}>
        <div className={style.inviteBox} style={!isMenuActive ? { border: 'none' } : {}}>
          <span><HiUserGroup /><p style={styles}>SQUAD</p></span>
          <span>
            <img src={groupInvite} alt="invite" />
            <div style={styles}>
              <p>Squad Join</p>
            </div>
          </span>
        </div>
        <div className={style.inviteBox} style={!isMenuActive ? { border: 'none' } : {}}>
          <span><BsRecord2Fill /><p style={styles}>ONLINE</p></span>
          <span>
            <img src={onlineInvite} alt="invite" />
            <div style={styles}>
              <p>Mary Jane</p>
              <p>Online</p>
            </div>
          </span>
        </div>
        <div className={style.inviteBox} style={!isMenuActive ? { border: 'none' } : {}}>
          <span><TbPlayerRecord /><p style={styles}>OFFLINE</p></span>
          <span>
            <img src={offlineInvite} alt="invite" />
            <div style={styles}>
              <p>402</p>
              <p>Offline</p>
            </div>
          </span>
        </div>
      </div>
    </div>
  )
}

export default RightSideMenu