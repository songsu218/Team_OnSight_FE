import style from '../css/Main.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import { Autoplay } from 'swiper/modules';

import RecordList from '../components/RecordList';
import RecordModal from '../components/RecordModal';

const Main = () => {
  return (
    <main className={`${style.main} mw`}>
      <div className={style.recordArea}>
        <section>
          <Swiper
            slidesPerView={3}
            loop={true}
            spaceBetween={30}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              980: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1350: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            autoplay={{
              delay: 4500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              <RecordList />
            </SwiperSlide>
            <SwiperSlide>
              <RecordList />
            </SwiperSlide>
            <SwiperSlide>
              <RecordList />
            </SwiperSlide>
            <SwiperSlide>
              <RecordList />
            </SwiperSlide>
            <SwiperSlide>
              <RecordList />
            </SwiperSlide>
          </Swiper>
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
