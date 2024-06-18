import style from '../css/Main.module.css';
import RecordList from '../components/RecordList';
import RecordModal from '../components/RecordModal';
import RankList from '../components/RankList';

const Main = () => {
  return (
    <main className={style.main}>
      <div className={style.rankArea}>
        <div className={style.imgBox}>
          <img src="/img/climb.png" alt="wall" />
          <div className={style.personBox}>
            <img src="/img/person1.png" alt="p1" />
            <img src="/img/person2.png" alt="p2" />
            <img src="/img/person3.png" alt="p3" />
            <img src="/img/person4.png" alt="p4" />
            <img src="/img/person5.png" alt="p5" />
          </div>
        </div>
        <RankList />
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
