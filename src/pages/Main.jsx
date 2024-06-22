import style from '../css/Main.module.css';
import RecordList from '../components/RecordList';

const Main = () => {
  return (
    <main className={`${style.main} viewCon`}>
      <div className={style.recordArea}>
        <RecordList />
      </div>
    </main>
  );
};

export default Main;
