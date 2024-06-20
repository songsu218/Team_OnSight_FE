import style from "../css/RecordList.module.css";

import { useState, useEffect } from "react";
import axios from "axios";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const RecordList = () => {
  const [records, setRecords] = useState([]);
  const [swiperRef, setSwiperRef] = useState(null);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const [progress, setProgress] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const prevHandler = () => {
    if (swiperRef) swiperRef.slidePrev();
  };

  const nextHandler = () => {
    if (swiperRef) swiperRef.slideNext();
  };

  const toggleAutoplay = () => {
    if (swiperRef) {
      if (isAutoplay) {
        swiperRef.autoplay.stop();
      } else {
        swiperRef.autoplay.start();
      }
      setIsAutoplay(!isAutoplay);
    }
  };

  useEffect(() => {
    const fetchRecords = async () => {
      try {
        const response = await axios.get("http://localhost:8000/record");
        setRecords(response.data);
      } catch (error) {
        console.error("error", error);
      }
    };

    fetchRecords();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (swiperRef && isAutoplay) {
        const currentProgress =
          (swiperRef.autoplay.running
            ? swiperRef.autoplay.timeLeft / 4500
            : 1) * 100;
        setProgress(100 - currentProgress);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [swiperRef, isAutoplay]);

  useEffect(() => {
    if (swiperRef) {
      setCurrentPage(swiperRef.realIndex + 1);
    }
  }, [swiperRef]);

  const restrictText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  };

  return (
    <Swiper
      slidesPerView={3}
      loop={true}
      spaceBetween={80}
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
      className='mySwiper'
      onSwiper={(swiper) => setSwiperRef(swiper)}
      onSlideChange={() => swiperRef && setCurrentPage(swiperRef.realIndex + 1)}
    >
      {records.map((record) => (
        <SwiperSlide key={record._id}>
          <div className={style.mw}>
            <div className={style.swiperBox}>
              <div className={style.swiperCon}>
                <div className={style.imgCon}>
                  <img
                    src={`http://localhost:8000/uploads/${record.thumbnail}`}
                    alt='thumbnail'
                  />
                </div>
                <span>
                  <img src='/img/test.jpg' alt='profile' />
                  <strong>닉네임</strong>
                </span>
                <span>{record.center}</span>
                <div className={style.textBox}>
                  <h3>{restrictText(record.title, 15)}</h3>
                  <p>{record.detail}</p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
      <div className={style.pageBox}>
        <button onClick={prevHandler}>
          <i className='fa-solid fa-arrow-left'></i>
        </button>
        <div>
          {currentPage} / {records.length}
        </div>
        <div className={style.autoProgress}>
          <div className={style.svgWrapper}>
            <svg viewBox='0 0 48 48'>
              <circle
                cx={24}
                cy={24}
                r={20}
                strokeDasharray='126'
                strokeDashoffset={`${126 * (progress / 100)}`}
              />
            </svg>
            <i
              className={`fa-solid ${isAutoplay ? "fa-stop" : "fa-play"} ${
                style.iconCenter
              }`}
              onClick={toggleAutoplay}
            ></i>
          </div>
        </div>
        <button onClick={nextHandler}>
          <i class='fa-solid fa-arrow-right'></i>
        </button>
      </div>
    </Swiper>
  );
};

export default RecordList;
