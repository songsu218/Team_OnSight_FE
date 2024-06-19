import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import React, { useEffect, useState } from 'react';
import style from '../css/MyPageList1.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Virtual, Navigation, Pagination } from 'swiper/modules';
import MyListCard from './MyListCard';

const MyPageList1 = () => {
  const [spaceBetween, setSpaceBetween] = useState(36);

  useEffect(() => {
    const resize = () => {
      const width = window.innerWidth;
      console.log(width);
      if (width > 1680) {
        setSpaceBetween(68);
      } else if (width > 1080) {
        setSpaceBetween(36);
      } else {
        setSpaceBetween(36);
      }
    };

    window.addEventListener('resize', resize);
    resize();

    return () => window.removeEventListener('resize', resize);
  }, []);

  return (
    <section className={style.sec}>
      <h3 className={style.sub}>
        <span>참여한</span>
        <span>챌린지</span>
      </h3>
      <div className={style.listData}>
        <Swiper
          modules={[Virtual, Navigation, Pagination]}
          slidesPerView={4}
          spaceBetween={0}
          pagination={{
            type: 'fraction',
          }}
          navigation={true}
          virtual
        >
          <SwiperSlide>
            <MyListCard />
          </SwiperSlide>
          <SwiperSlide>
            <MyListCard />
          </SwiperSlide>
          <SwiperSlide>
            <MyListCard />
          </SwiperSlide>
          <SwiperSlide>
            <MyListCard />
          </SwiperSlide>
          <SwiperSlide>
            <MyListCard />
          </SwiperSlide>
          <SwiperSlide>
            <MyListCard />
          </SwiperSlide>
          <SwiperSlide>
            <MyListCard />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default MyPageList1;
