import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import style from '../css/MyPageList1.module.css';
import List from './list/List';

const MyPageList2 = () => {
  return (
    <section className={style.sec}>
      <div>
        <h3 className={style.sub}>
          <span>내</span>
          <span>기록</span>
        </h3>
        <button className={style.btn}>기록추가</button>
      </div>
      <List />
    </section>
  );
};

export default MyPageList2;
