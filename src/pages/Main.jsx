import style from '../css/Main.module.css';
import RecordList from '../components/RecordList';
import RecordModal from '../components/RecordModal';

const Main = () => {
  return (
    <main className={`${style.main} viewCon`}>
      <div className={style.recordArea}>
        <RecordList />
      </div>
      <div className={style.btnArea}>
        <RecordModal />
      </div>
    </main>
  );
};

export default Main;
