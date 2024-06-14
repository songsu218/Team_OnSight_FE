import style from '../css/Main.module.css';
import RecordList from '../components/RecordList';
import RecordModal from '../components/RecordModal';

const Main = () => {
  return (
    <main className={`${style.main} mw`}>
      <div className={style.recordArea}>
        <section>
          <RecordList />
        </section>
      </div>
      <div className={style.cupBox}>
        <div className={style.textBox}>
          <p>
            다른 사람들의 기록이에요
            <br />
            당신의 기록도 쌓아보세요
          </p>
        </div>
        <div className={style.cupArea}>
          <img src="/img/cup.png" alt="cup" />
          <div className={style.cupText}>
            <p>컵 들어갈 영역</p>
          </div>
        </div>
      </div>
      <RecordModal />
    </main>
  );
};

export default Main;
