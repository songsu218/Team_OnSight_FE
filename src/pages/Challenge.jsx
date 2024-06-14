import style from "../css/Challenge.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import ChallengeList from "../components/ChallengeList";

const Challenge = () => {
  const handleAddChallenge = () => {
    // console.log("Add button clicked");
  };
  return (
    <main className={`${style.main} mw `}>
      <div className={style.challengeArea}>
        <h2 className={style.title}>진행중인 챌린지에요~</h2>
        <section className={style.swiperSection}>
          <Swiper
            modules={[Navigation]}
            slidesPerView={2}
            loop={true}
            spaceBetween={30}
            autoplay={false}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            pagination={{
              clickable: true,
            }}
            className='mySwiper'
            style={{ paddingTop: "20px", paddingBottom: "20px" }}
          >
            <SwiperSlide>
              <ChallengeList />
            </SwiperSlide>
            <SwiperSlide>
              <ChallengeList />
            </SwiperSlide>
            <SwiperSlide>
              <ChallengeList />
            </SwiperSlide>
            <SwiperSlide>
              <ChallengeList />
            </SwiperSlide>
            <SwiperSlide>
              <ChallengeList />
            </SwiperSlide>
            <div className='swiper-button-next'></div>
            <div className='swiper-button-prev'></div>
          </Swiper>
          {/* 네비게이션 버튼 */}
        </section>
      </div>
      <div className={style.challengeArea}>
        <h2 className={style.title}>지난 챌린지에요~</h2>
        <section className={style.swiperSection}>
          <Swiper
            modules={[Navigation]}
            slidesPerView={2}
            loop={true}
            spaceBetween={30}
            autoplay={false}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            pagination={{
              clickable: true,
            }}
            className='mySwiper'
            style={{ paddingTop: "20px", paddingBottom: "20px" }}
          >
            <SwiperSlide>
              <ChallengeList />
            </SwiperSlide>
            <SwiperSlide>
              <ChallengeList />
            </SwiperSlide>
            <SwiperSlide>
              <ChallengeList />
            </SwiperSlide>
            <SwiperSlide>
              <ChallengeList />
            </SwiperSlide>
            <SwiperSlide>
              <ChallengeList />
            </SwiperSlide>
            {/* 네비게이션 버튼 */}
            <div className='swiper-button-next'></div>
            <div className='swiper-button-prev'></div>
          </Swiper>
        </section>
      </div>
      <div className={style.addButton}>
        <button onClick={handleAddChallenge}>+</button>
      </div>
    </main>
  );
};

export default Challenge;
