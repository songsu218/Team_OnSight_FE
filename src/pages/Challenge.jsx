import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import { ch } from "../api.js";
// import "swiper/css";
// import "swiper/css/pagination";
import style from "../css/challenge.module.css";

// import 'swiper/css/navigation';
const Challenge = (props) => {
  //#region 변수,Hook
  const { props1, props2 } = {
    ...props,
  };
  const navigate = useNavigate();
  const swiperRef = useRef(null);
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const [dataList, setDataList] = useState([]);
  const [nowList, setNowList] = useState([]);
  const [pastList, setPastList] = useState([]);
  const [swiper, setSwiper] = useState(null);
  const [totalSlides, setTotalSlides] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(1);
  const [selectedOption, setSelectedOption] = useState("");
  const [printData, setPrintData] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [slidesPerViewCount, setSlidesPerViewCount] = useState(4);
  const [isNarrowScreen, setIsNarrowScreen] = useState(window.innerWidth <= 1079)
console.log(totalSlides - slidesPerViewCount + 1 > 0
  ? totalSlides - slidesPerViewCount + 1
  : 1);
  console.log(totalSlides);
  console.log(slidesPerViewCount);
  //#endregion 변수,Hook

  //#region init
  useEffect(() => {
    setAllChData("TOT");
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };

  }, []);

  useEffect(()=>{
    setTotalSlides(printData.length);
    if(isNarrowScreen){
      setSlidesPerViewCount(2);
    }else {
      setSlidesPerViewCount(4);
    }
  }, [isNarrowScreen])
  //#endregion init

  //#region 함수

  const setAllChData = (tag) => {
    ch.chTotalList(tag)
    .then((result) => {
      setDataList(result.data);
      setNowList(result.data.filter((item) => item.state === "NOW"));
      setPastList(result.data.filter((item) => item.state === "PAST"));
      setPrintData(result.data);
      console.log(result.data);
    })
    .catch((error) => {
      console.log(`${error}`);
    });
  }

  const setMyChData = (tag,id) => {
    ch.chMyList(tag,id)
    .then((result) => {
      setDataList(result.data);
      setNowList(result.data.filter((item) => item.state === "NOW"));
      setPastList(result.data.filter((item) => item.state === "PAST"));
      setPrintData(result.data);
      console.log(result.data);
    })
    .catch((error) => {
      console.log(`${error}`);
    });
  }

  const handleSelectChange = (event) => {
    const target = event.target.value;
    const instance =
      target == "선택"
        ? dataList
        : target == 1
        ? nowList
        : target == 2
        ? pastList
        : "";
    setSelectedOption(target);
    setPrintData(instance);
    setTotalSlides(instance.length);
  };
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
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
  const handleResize = () => {
    setIsNarrowScreen(window.innerWidth <= 1079);
  };

  const handleCardClick = (item) => {
    navigate(`/challenge/${item._id}/${item.challengename}`, {
      state: { detailData: item },
    });
  };
  const handleSlideChange = () => {
    if (swiper !== null) {
      setCurrentIndex(swiper.realIndex + 1);
    }
  };
  const handleSwiper = (swiper) => {
    setSwiper(swiper);
    if (swiper) {
      setTotalSlides(swiper.slides.length);
    }
  };

  const handleClick = (index, event) => {
    event.preventDefault(); 
    setActiveIndex(index);
    const type = selectedOption == '선택' ? 'TOT' : selectedOption;
    if (index === 0){
      //나의 챌린지 만들기
      setAllChData(type);
    }else if(index === 1){
      //나의 챌린지 보기
      setMyChData(type,'qwer1234');
    }
  };
  //#endregion 함수

  //#region return
  return (
    <>
      <div className="con1">
        <main id={style.container} className="mw">
          <div className={style.content}>
            <div className={style.page_tit_area}>
              <h2 className={style.page_tit}>챌린지 일정</h2>
              <nav className={style.page_nav}>
                <ul>
                <li className={activeIndex === 0 ? style.active : ''}>
                    <a
                      href="#"
                      className={style.page_link}
                      onClick={(event) => handleClick(0, event)}
                      title="나의 챌린지 만들기 페이지 이동 링크"
                    >
                      나의 챌린지 만들기
                    </a>
                  </li>
                  <li className={activeIndex === 1 ? style.active : ''}>
                    <a
                      href="#"
                      className={`${style.page_link}`}
                      onClick={(event) => handleClick(1, event)}
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
              <select
                id={style.challengeOption1}
                className={style.option_list}
                value={selectedOption}
                onChange={handleSelectChange}
              >
                <option>선택</option>
                <option value={1}>진행 중</option>
                <option value={2}>진행 끝</option>
              </select>
            </div>
            <div className={style.challenge_wrap}>
              <Swiper
                ref={swiperRef}
                spaceBetween={50}
                slidesPerView={slidesPerViewCount}
                // navigation
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                modules={[Navigation, Pagination, Autoplay]}
                // pagination={{ clickable: true, type: "fraction" }}
                onSwiper={handleSwiper}
                onSlideChange={handleSlideChange}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
              >
                {printData.length == 0
                  ? ""
                  : printData.map((item) => (
                      <SwiperSlide
                        key={item._id}
                        onClick={() => handleCardClick(item)}
                      >
                        <div className={style.challenge_link}>
                          <div className={style.challenge_img}>
                            <img
                              srcSet={`${item.thumbnail}`}
                              src={`${item.thumbnail}`}
                              alt={item.challengename}
                            />
                          </div>
                          <span className={style.challenge_cate}>
                            {item.center}
                          </span>
                          <em className={style.challenge_tit}>
                            {item.challengename}
                          </em>
                          <span className={style.challenge_txt}>
                            {item.date_string}
                            <p />
                          </span>
                        </div>
                      </SwiperSlide>
                    ))}
                {/* <div class="swiper-button-prev"></div>
                <div class="swiper-pagination"></div>
                <div class="swiper-button-next"></div> */}
                <div className={style.control}>
                  <div className={style.swiper_button_prev} onClick={goPrev} />
                  <div className={style.swiper_pagination}>
                    {currentIndex} /{" "}
                    {totalSlides - slidesPerViewCount + 1 > 0
                      ? totalSlides - slidesPerViewCount + 1
                      : 1}
                  </div>
                  <div className={style.autoplay_progress} slot="container-end">
                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                      <circle cx="24" cy="24" r="20"></circle>
                    </svg>
                    <button
                      type="button"
                      className={`${style.control_btn} ${style.btn_stop}`}
                      title="정지 버튼"
                    >
                      자동재생 정지 버튼
                    </button>
                    <button
                      type="button"
                      className={`${style.control_btn} ${style.btn_play}`}
                      title="재생 버튼"
                    >
                      재생 버튼
                    </button>
                    <span ref={progressContent}></span>
                  </div>
                  <div className={style.swiper_button_next} onClick={goNext} />
                </div>
              </Swiper>
            </div>
          </div>
        </main>
      </div>
    </>
  );
  //#endregion return
};
export default Challenge;
