import React, { useEffect, useState } from 'react';
import style from "./MainMenu.module.css";
import { IoIosArrowBack } from "react-icons/io";

const MainMenu = () => {
  const [matchData, setMatchData] = useState([]);
  const [activeMatch, setActiveMatch] = useState(null);

  const fetchData = async () => {
    try {
      const url = 'https://mmo-games.p.rapidapi.com/games?category=military';
      const options = {
        method: 'GET',
        headers: {
          'x-rapidapi-key': '36325731c7mshae1fc4ba3943ca2p1b346ajsn7ef08dccd5cc',
          'x-rapidapi-host': 'mmo-games.p.rapidapi.com'
        }
      };
      const response = await fetch(url, options);
      const result = await response.json();
      setMatchData([...result]);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => { fetchData() }, [])

  return (
    <div className={style.container}>
      <header className={style.headerRow}>
        <div>
          <IoIosArrowBack id={style.backArrow} />
          <span>MULTIPLAYER</span>
          <span>/</span>
        </div>
        <h2>QUICKMATCH</h2>
      </header>
      <menu className={style.menuContainer}>
        <div className={style.nameList}>
          {matchData && matchData.map((match, index) =>
            <div className={style.nameBox} key={match.id}
              onMouseEnter={() => { setActiveMatch({ ...match }) }}
              onMouseLeave={() => { setActiveMatch(null) }}
              style={index === 0 || index === 1 || index === 2 ? { color: 'orange' } : {}}
            >{match.title.toUpperCase()}</div>
          )}
        </div>

        {activeMatch &&
          <div className={style.detailsConatainer} >
            <img src={activeMatch.thumbnail} alt={"image"} loading='lazy' />
            <div className={style.infoBox}>
              <h2>{activeMatch.title.toUpperCase()}</h2>
              <p>{activeMatch.short_description}</p>
            </div>
          </div>
        }
      </menu>
    </div>
  )
}

export default MainMenu