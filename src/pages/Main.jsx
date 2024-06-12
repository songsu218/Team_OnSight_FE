import style from '../css/Main.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import { Autoplay } from 'swiper/modules';

import RecordList from '../components/RecordList';

const Main = () => {
  return (
    <main className={`${style.main} mw`}>
      <div className={style.recordArea}>
        <section>
          <Swiper
            slidesPerView={3}
            loop={true}
            spaceBetween={30}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
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
          <p>무언가 들어갈 자리</p>
        </div>
        <div className={style.cupArea}></div>
      </div>
    </main>
  );
};

export default Main;
