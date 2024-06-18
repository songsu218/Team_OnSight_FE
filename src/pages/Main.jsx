import style from '../css/Main.module.css';
import RecordList from '../components/RecordList';
import RecordModal from '../components/RecordModal';
import RankList from '../components/RankList';
import { useState } from 'react';

const Main = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <main className={style.main}>
      <div className={style.rankArea}>
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
            <img
              src="/img/person4.png"
              alt="p4"
              onMouseEnter={() => setHoveredCard(4)}
              onMouseLeave={() => setHoveredCard(null)}
            />
            <img
              src="/img/person5.png"
              alt="p5"
              onMouseEnter={() => setHoveredCard(5)}
              onMouseLeave={() => setHoveredCard(null)}
            />
          </div>
        </div>
        <RankList hoveredCard={hoveredCard} />
      </div>
      <div className={`${style.recordArea} mw`}>
        <h2>
          모두의 기록
          <RecordModal />
        </h2>
        <section>
          <RecordList />
        </section>
      </div>
    </main>
  );
};

export default Main;
