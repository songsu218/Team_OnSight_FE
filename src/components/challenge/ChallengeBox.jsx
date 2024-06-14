import * as React from "react";
// import "../css/ChallengeBox.css";
import { Autoplay } from "swiper/modules";
import ChallengeList from "./ChallengeList";
import { Swiper, SwiperSlide } from "swiper/react";
const ChallengeBox = (props) => {
  const {subjectList , detailList, srcList } = { ...props,};

  const subject1 = '경기도 어찌구 챌린지';
  const subject2 = '서울 어찌구 챌린지';
  const subject3 = '강원도 어찌구 챌린지';
  const subject4 = '전라도 어찌구 챌린지';
  const detail = '현재1등누구세요';
  const src1 = "/img/gyeonggi.png"
  const src2 = "/img/seoul.png"
  const src3 = "/img/gangwon.png"
  const src4 = "/img/jeonra.png"
  
  return (
    <div>
      <section>
        <Swiper
          slidesPerView={2}
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
            <ChallengeList subject = {subject1} src = {src1} detail = {detail}/>
          </SwiperSlide>
          <SwiperSlide>
            <ChallengeList subject = {subject2} src = {src2} detail = {detail}/>
          </SwiperSlide>
        </Swiper>
      </section>
    </div>
  );
};

export default ChallengeBox;
