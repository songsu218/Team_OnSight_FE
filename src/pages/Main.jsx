import style from '../css/Main.module.css';
import RecordList from '../components/RecordList';
import RecordModal from '../components/RecordModal';

const Main = () => {
  return (
    <main className={`${style.main} mw`}>
      <div className={style.recordArea}>
        <h2>
          다른 사람 기록
          <RecordModal />
        </h2>
        <section>
          <RecordList />
        </section>
      </div>
      <div className={style.rankArea}></div>
    </main>
  );
};

export default Main;
