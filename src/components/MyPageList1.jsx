import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import style from '../css/MyPageList1.module.css';
import List from './list/List';

const MyPageList1 = () => {
  return (
    <section className={style.sec}>
      <h3 className={style.sub}>
        <span>참여한</span>
        <span>챌린지</span>
      </h3>
      <List />
    </section>
  );
};

export default MyPageList1;
