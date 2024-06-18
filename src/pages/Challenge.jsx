import style from "../css/challenge.module.css";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import "swiper/css";

const Challenge = (props) => {
  const { showJoinButton, hideslideButton, slidesPerViewCount } = {
    ...props,
  };

  const navigate = useNavigate();
  const swiperRef = useRef(null);
  const [swiper, setSwiper] = useState(null);
  const [totalSlides, setTotalSlides] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  const goNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };
  const handleCardClick = (item) => {
    navigate(`/challenge/${item.id}/${item.title}`, {
      state: { detailData: item },
    });
  };
  const handleSlideChange = () => {
    if (swiper !== null) {
      setCurrentIndex(swiper.realIndex);
    }
  };
  const handleSwiper = (swiper) => {
    setSwiper(swiper);
    if (swiper) {
      setTotalSlides(swiper.slides.length);
    }
  };

  const dataList = [
    {
      id: 1,
      title: "경기도 어찌구 챌린지",
      center: "경기 클라이밍장 이름",
      date: "20240714",
      images: "/img/gyeonggi.png",
    },
    {
      id: 2,
      title: "서울 어찌구 챌린지",
      center: "서울 클라이밍장 이름",
      date: "20240715",
      images: "/img/seoul.png",
    },
    {
      id: 3,
      title: "경기2 어찌구 챌린지",
      center: "경기2 클라이밍장 이름",
      date: "20240715",
      images: "/img/gyeonggi.png",
    },
    {
      id: 4,
      title: "서울2 어찌구 챌린지",
      center: "서울2 클라이밍장 이름",
      date: "20240715",
      images: "/img/seoul.png",
    },
    {
      id: 5,
      images: "/img/gangwon.png",
      title: "강원도 어찌구 챌린지",
      date: "20240519",
      center: "강원 클라이밍장 이름",
    },
    {
      id: 6,
      images: "/img/gangwon.png",
      title: "강원도2 어찌구 챌린지",
      date: "20240519",
      center: "강원2 클라이밍장 이름",
    },
    {
      id: 7,
      images: "/img/gangwon.png",
      title: "강원도3 어찌구 챌린지",
      date: "20240519",
      center: "강원3 클라이밍장 이름",
    },
  ];

  return (
    <>
      <main id={style.container}>
        <div className={style.content}>
          <div className={style.page_tit_area}>
            <h2 className={style.page_tit}>챌린지 일정</h2>
            <nav className={style.page_nav}>
              <ul>
                <li className={style.active}>
                  <a
                    href="#"
                    className={style.page_link}
                    title="나의 챌린지 만들기 페이지 이동 링크"
                  >
                    나의 챌린지 만들기
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className={style.page_link}
                    title="나의 챌린지 보기 페이지 이동 링크"
                  >
                    나의 챌린지 보기
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className={style.sub_tit_area}>
            <h3 className={style.sub_tit}>2024</h3>
          </div>
          <div className={style.filter_option}>
            <label htmlFor="challengeOption1" className={style.option_label}>
              <span>상태</span>
            </label>
            <select id={style.challengeOption1} className={style.option_list}>
              <option>선택</option>
              <option value={1}>진행 중</option>
              <option value={2}>진행 끝</option>
            </select>
          </div>
          <div className={style.challenge_wrap}>
            <Swiper
              ref={swiperRef}
              spaceBetween={50}
              slidesPerView={4}
              navigation
              autoplay={{ delay: 3000 }}
              modules={[Navigation, Pagination, Autoplay]}
              pagination={{ clickable: true }}
              onSwiper={handleSwiper}
              onSlideChange={handleSlideChange}
            >
              {dataList.length == 0
                ? ""
                : dataList.map((item) => (
                    <SwiperSlide
                      key={item.id}
                      onClick={() => handleCardClick(item)}
                    >
                      <div className={style.challenge_link}>
                        <div className={style.challenge_img}>
                          <img
                            srcSet={`${item.images}?h=120&fit=crop&auto=format&dpr=2 2x`}
                            src={`${item.images}?h=120&fit=crop&auto=format`}
                            alt={item.title}
                          />
                        </div>
                        <span className={style.challenge_cate}>
                          {item.center}
                        </span>
                        <em className={style.challenge_tit}>{item.title}</em>
                        <span className={style.challenge_txt}>
                          {item.date}
                          <p />
                        </span>
                      </div>
                    </SwiperSlide>
                  ))}
              <div className={style.swiper_button_prev} />
              {currentIndex} / {totalSlides}
              <div className={style.swiper_button_next} />

            </Swiper>
          </div>
        </div>
      </main>
    </>
  );
};
export default Challenge;
