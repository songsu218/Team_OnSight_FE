import style from '../css/RecordList.module.css';

import { useState, useEffect } from 'react';
import axios from 'axios';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

const RecordList = () => {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    const fetchRecords = async () => {
      try {
        const response = await axios.get('http://localhost:8000/record');
        setRecords(response.data);
      } catch (error) {
        console.error('error', error);
      }
    };

    fetchRecords();
  }, []);

  const restrictText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + '...';
    }
    return text;
  };

  return (
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
      {records.map((record) => (
        <SwiperSlide key={record._id}>
          <div className={style.swiperBox}>
            <div className={style.upperBox}>
              <img src="/img/test.jpg" alt="profile" />
              <span>닉네임</span>
            </div>
            <div className={style.lowerBox}>
              <img
                src={`http://localhost:8000/uploads/${record.thumbnail}`}
                alt="thumbnail"
              />
              <div className={style.levelBox}>
                <h3>{restrictText(record.title, 10)}</h3>
                <span>{record.center}</span>
                <div className={style.levelArea}>
                  <div
                    style={{
                      width: '10px',
                      height: '10px',
                      backgroundColor: 'red',
                      borderRadius: '2px',
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default RecordList;
