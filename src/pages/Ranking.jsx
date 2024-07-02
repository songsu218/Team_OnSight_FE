import style from '../css/Ranking.module.css';

import RankList from '../components/RankList';
import { useState } from 'react';

const Ranking = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div>
      <div className={`${style.rankArea} viewCon`}>
        <div className={style.rankListBox}>
          <RankList hoveredCard={hoveredCard} />
        </div>
        <div className={style.imgBox}>
          <img src="/img/climb.png" alt="wall" />
          <div className={style.personBox}>
            <img
              src="/img/person1.png"
              alt="p1"
              onMouseEnter={() => setHoveredCard(1)}
              onMouseLeave={() => setHoveredCard(null)}
            />
            <img
              src="/img/person2.png"
              alt="p2"
              onMouseEnter={() => setHoveredCard(2)}
              onMouseLeave={() => setHoveredCard(null)}
            />
            <img
              src="/img/person3.png"
              alt="p3"
              onMouseEnter={() => setHoveredCard(3)}
              onMouseLeave={() => setHoveredCard(null)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ranking;
