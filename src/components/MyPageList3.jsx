import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import style from '../css/MyPageList1.module.css';
import List from './list/List';
import FeedList from './list/FeedList';

const MyPageList3 = () => {
  return (
    <section className={style.sec}>
      <div>
        <h3 className={style.sub}>
          <span>내</span>
          <span>피드</span>
        </h3>
      </div>
      <FeedList />
    </section>
  );
};

export default MyPageList3;
